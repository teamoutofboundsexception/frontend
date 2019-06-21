<template>
  <div>
    <div class="row" id="search-row">
      <div class="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
        <div class="jumbotron">
          <form v-bind:action="'/' + $i18n.locale + '/search'">
            <input class="hide" type="text" name="lat" v-bind:value="coordinates.latitude" v-if="!!coordinates.latitude && form.coordinates" />
            <input class="hide" type="text" name="lon" v-bind:value="coordinates.longitude" v-if="!!coordinates.latitude && form.coordinates" />

            <h1 class="text-center">{{ $t('homepage.search.header') }}</h1>

            <div class="alert alert-danger text-center" v-bind:class="{ 'text-hide': !form.city }">Wpisz nazwę miasta!</div>

            <div class="form-group">
              <div class="input-group">
                <label class="text-hide" for="query">{{ $t('homepage.search.label') }}</label>
                <input class="form-control" id="query" name="query" type="text"
                       v-bind:aria-label="$t('homepage.search.label')"
                       v-bind:placeholder="$t('homepage.search.placeholder')" v-model="query">

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
    </div>

<!--    <div class="row" id="featured-row" v-if="(featured === undefined) || (featured.length === 4)">-->
<!--      <h2 class="col-12 text-center">{{ $t('homepage.featured.header') }}</h2>-->

<!--      <div class="col text-center" v-if="featured === undefined">-->
<!--        <div class="spinner-border" role="status">-->
<!--          <span class="sr-only">{{ $t('homepage.featured.loading') }}</span>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="card-group col offset-lg-2 col-lg-8">-->
<!--        <div class="card border-0" v-bind:key="index" v-for="(city, index) in featured">-->
<!--          <img v-bind:alt="city.image.text" class="card-img-top" v-bind:src="city.image.url">-->
<!--          <div class="card-body">-->
<!--            <h4 class="card-title text-center">{{ city.title }}</h4>-->
<!--            <p class="card-text text-justify">{{ city.text }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    address: state => state.location.address,
    coordinates: state => state.location.coordinates,
    featured: state => state.cities.featured
  }),

  created () {
    const { longitude, latitude } = this.coordinates
    if (!longitude || !latitude) {
      this.$store.dispatch('location/getLocation')
    }

    // this.$store.dispatch('cities/getFeatured')
  },

  beforeMount () {
    const { longitude, latitude } = this.coordinates
    if ((longitude && latitude) && !this.query) {
      this.getQuery(this.address)
    }
  },

  data () {
    return {
      form: {
        city: false,
        coordinates: false
      },
      query: '',
      time: '02:30'
    }
  },

  methods: {
    ...mapActions(
      'location', [
        'getLocation'
      ]),

    ...mapActions(
      'cities', [
        'getFeatured'
      ]),

    getQuery (address) {
      if (address) {
        if (address.hasOwnProperty('city')) {
          return address.city
        } else if (address.hasOwnProperty('village')) {
          return address.village
        } else {
          return ''
        }
      }
    },

    submit () {
      const {coordinates, form, query, time, $i18n, $router} = this
      // eslint-disable-next-line
      if (!!query) {
        const {latitude, longitude} = coordinates
        if (form.coordinates && latitude && longitude) {
          $router.push('/' + $i18n.locale + '/search?query=' + query + '&lat=' + latitude + '&lon=' + longitude + '&time=' + time)
        } else {
          $router.push('/' + $i18n.locale + '/search?query=' + query + '&time=' + time)
        }
      } else {
        this.form.city = true
      }
    }
  },

  watch: {
    address: function (address) {
      if (!this.query) {
        this.query = this.getQuery(address)
        this.form.coordinates = true
      }
    },

    query: function (query) {
      if (this.form.city && !!query) {
        this.form.city = false
      }

      this.form.coordinates = this.query === this.getQuery(this.address)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.row {
  &#search-row {
    @media (max-width: 768px) {
      border-bottom: 2px solid $skyBaseColor;
    }

    @media (min-width: 768px) {
      background-color: $skyBaseColor;
      background-image: url('../assets/homepage-background.jpg');
      background-position: bottom center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
  }

  &#featured-row {
    margin: 32px 0;

    h2 {
      color: #333333;
      margin-bottom: 16px;
    }

    .spinner-border {
      height: 4rem;
      margin: 32px;
      width: 4rem;
    }

    .card {
      cursor: default;
      padding: 0 8px;

      img {
        height: 192px;
        object-fit: cover;
      }
    }
  }
}

.jumbotron {
  background-color: #ffffff;
  border-radius: 0;
  margin: 64px 0 128px;

  h1 {
    color: $skyBaseColor;
    margin-bottom: 32px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 768px) and (max-width: 992px) {
      font-size: 22px;
    }
  }
}

form {
  padding: 32px;

  input.hide {
    display: none;
  }

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
        font-size: 30px;

        @media (max-width: 768px) {
          font-size: 18px;
        }

        @media (min-width: 768px) and (max-width: 992px) {
          font-size: 24px;
        }

        &:hover, &:focus {
          border-color: $skyBaseColor;
          border-width: 3px 0 3px 3px;
          padding: calc(0.375rem - 1px) calc(0.75rem - 1px);
        }
      }

      div.input-group-append button {
        background-color: $skyBaseColor;
        border-color: $skyBaseColor;
        color: #ffffff;
        font-size: 30px;

        &:hover, &:focus {
          font-size: 34px;
          padding: calc(0.375rem - 2px) calc(0.75rem - 2px);
        }

        @media (max-width: 768px) {
          font-size: 18px;

          &:hover, &:focus {
            font-size: 22px;
          }
        }

        @media (min-width: 768px) and (max-width: 992px) {
          font-size: 24px;

          &:hover, &:focus {
            font-size: 28px;
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
