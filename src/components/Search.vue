<template>
  <div>
    <div class="row" id="search-row">
      <div class="col-xs-12 offset-md-2 col-md-8 offset-lg-0 col-lg-4">
        <form v-bind:action="'/' + $i18n.locale + '/search'">
          <div class="form-group">
            <div class="input-group">
              <label class="text-hide" for="query">{{ $t('homepage.search.label') }}</label>
              <input class="form-control" id="query" name="query" type="text"
                     v-bind:aria-label="$t('search.search.label')"
                     v-bind:placeholder="$t('search.search.placeholder')" v-model="query">

              <div class="input-group-append">
                <button class="input-group-text" type="submit" v-on:click.stop.prevent="submit()">
                  <font-awesome-icon icon="search" />
                </button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="time">Czas zwiedzania</label>
            <input id="time" name="time" type="time" v-model="time" />
          </div>
        </form>
      </div>
    </div>

    <div class="row" id="results-row">
      <div class="col text-center" v-if="results === null">
        <div class="spinner-border" role="status">
          <span class="sr-only">Ładowanie</span>
        </div>
      </div>

      <div class="col text-center" v-if="(results !== null) && (results.length === 0)">Brak wyników :(</div>

      <div class="col-xs-12 offset-lg-2 col-lg-8" v-bind:key="index" v-for="(result, index) in results" v-if="(results !== null) && (results.length > 0)">
        <div class="card-deck">
          <div class="card border-0" v-bind:key="index" v-for="(place, index) in result">
            <img class="card-img-top" v-bind:src="!!place.image ? place.image : 'https://via.placeholder.com/512x256.png?text=Grafika%20niedost%C4%99pna'" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">
                {{ place.title }}

                <span class="text-muted" v-if="!!place.blindFriendly || !!place.wheelChairFriendly">
                  <font-awesome-icon icon="blind" v-if="!!place.blindFriendly" />
                  <font-awesome-icon icon="wheelchair" v-if="!!place.wheelChairFriendly" />
                </span>

                <div v-if="!!place.rating">
                  <small class="text-muted"><font-awesome-icon icon="star"/> {{ place.rating }}</small>
                </div>
                <div v-if="!!place.time">
                  <small class="text-muted">Średnia długość wizyty: {{ place.time }}</small>
                </div>
              </h5>
              <p class="card-text">{{ place.text }}</p>
            </div>
          </div>
        </div>

        <div v-if="result.map(place => place.coordinates).filter(coordinates => !!coordinates && (coordinates.length === 2)).length > 0">
          <b-button v-b-toggle="'map-' + index" variant="light">Pokaż</b-button>

          <b-collapse v-bind:id="'map-' + index" visible>
            <vl-map v-bind:load-tiles-while-animating="true" v-bind:load-tiles-while-interacting="true" data-projection="EPSG:4326">
              <vl-view v-bind:min-zoom="12" v-bind:zoom="13" v-bind:max-zoom="18" v-bind:center.sync="results[0].center"></vl-view> <!-- v-bind:zoom.sync="map.zoom" v-bind:rotation.sync="map.rotation" -->

<!--              <vl-feature v-if="!!coordinates && (coordinates.length === 2)">-->
<!--                <vl-geom-point v-bind:coordinates="coordinates"></vl-geom-point>-->
<!--                <vl-style-box>-->
<!--                    <vl-style-icon src="/static/marker.png" v-bind:scale="0.4" v-bind:anchor="[0.5, 1]"></vl-style-icon>-->
<!--                  </vl-style-box>-->
<!--              </vl-feature>-->

              <vl-feature>
                <vl-geom-multi-point v-if="result.filter(place => !!place.coordinates && (place.coordinates.length === 2)).length > 0" v-bind:coordinates="result.filter(place => !!place.coordinates && (place.coordinates.length === 2)).map(place => place.coordinates)" />

                <vl-style-box>
                  <vl-style-icon src="/static/marker.png" v-bind:scale="0.4" v-bind:anchor="[0.5, 1]"></vl-style-icon>
                </vl-style-box>
              </vl-feature>

              <vl-layer-tile id="osm">
                <vl-source-osm></vl-source-osm>
              </vl-layer-tile>
            </vl-map>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import places from '@/api/places'

export default {
  beforeMount () {
    const { query } = this.$route
    this.query = query.query
    this.time = query.time

    if (!!query.lon && !!query.lat) {
      this.coordinates = [query.lon, query.lat]
    }

    places.getTrip({
      actualPlaceName: query.query,
      time: query.time,
      longitude: query.lon,
      latitude: query.lat
    }).catch(() => {
      this.results = []
    }).then(data => {
      // eslint-disable-next-line
      this.results = !!data ? data : []

      this.results.forEach(result => result.forEach(place => {
        place.coordinates = [place.longitude, place.latitude]
      }))

      for (const index in this.results) {
        this.results[index].center = this.getCenterPoint(this.results[index])
      }
    }).then(() => {
      this.$children.forEach(collapse => collapse.toggle())
    })
  },

  mounted () {
    this.$children.forEach(collapse => {
      this.$nextTick(collapse.toggle)
    })
  },

  data () {
    return {
      map: {
        zoom: 15,
        rotation: 0
      },
      coordinates: [],
      query: '',
      time: '02:30',
      results: null
    }
  },

  methods: {
    getCenterPoint (places) {
      const point = {
        latitude: 0,
        longitude: 0
      }

      places = places.filter(place => !!place.coordinates && (place.coordinates.length === 2))

      for (const index in places) {
        const place = places[index]
        point.latitude += place.coordinates[0]
        point.longitude += place.coordinates[1]
      }

      if (places.length > 0) {
        point.latitude /= places.length
        point.longitude /= places.length
      }

      return [point.latitude, point.longitude]
    },

    submit () {
      const {query, time, $i18n, $router} = this
      $router.push('/' + $i18n.locale + '/search?query=' + query + '&time=' + time)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/colors.scss';

div#search-row {
  background-color: lighten($skyBaseColor, 16%);
  margin-bottom: 16px;
}

div#results-row {
  > div:not(:last-child) {
    border-bottom: 1px solid $groundBaseColor;
    margin-bottom: 32px;
    padding-bottom: 32px;
  }

  div.card-deck {
    div.card {
      min-width: 256px;

      &:first-child:last-child {
        margin: auto;
        max-width: 512px;
      }

      .card-title {
        position: relative;

        > span.text-muted {
          position: absolute;
          right: 0;
        }
      }

      img {
        max-height: 256px;
        object-fit: cover;
      }
    }
  }

  button.btn {
    margin: 16px 0;
  }
}

form {
  padding: 32px;

  div.form-group {
    input {
      border: 1px solid $skyBaseColor;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      color: #555555;

      &:hover, &:focus {
        color: #333333;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
      }

      &#time {
        border-radius: .25rem;
        padding: 3px;

        &:hover, &:focus {
          border-width: 3px;
          padding: 2px;
        }
      }
    }

    div.input-group {
      input.form-control {
        border-bottom-left-radius: 0.25rem;
        border-top-left-radius: 0.25rem;
        border-width: 1px 0 1px 1px;
        font-size: 20px;

        @media (max-width: 992px) {
          font-size: 18px;
        }

        &:hover, &:focus {
          border-width: 3px 0 3px 3px;
          padding: calc(0.375rem - 1px) calc(0.75rem - 1px);
        }
      }

      div.input-group-append button {
        background-color: $skyBaseColor;
        border-color: $skyBaseColor;
        color: #ffffff;
        font-size: 20px;

        &:hover, &:focus {
          font-size: 24px;
          padding: calc(0.375rem - 2px) calc(0.75rem - 2px);
        }

        @media (max-width: 992px) {
          font-size: 18px;

          &:hover, &:focus {
            font-size: 22px;
          }
        }
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
