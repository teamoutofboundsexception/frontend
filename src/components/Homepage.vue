<template>
  <div>
    <div class="row" id="search-row">
      <div class="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
        <div class="jumbotron">
          <form action="/search">
            <h1 class="text-center">Zwiedzaj odwiedzane miasta jak nigdy wcześniej!</h1>

            <div class="form-group">
              <div class="input-group">
                <label class="text-hide" for="query">Wyszukaj miasta</label>
                <input class="form-control" type="text" id="query" name="query" placeholder="Miasto"
                       aria-label="Search">

                <div class="input-group-append">
                  <button class="input-group-text" type="submit">
                    <font-awesome-icon icon="search"/>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="row" id="featured-row">
      <h2 class="col-12 text-center">Proponowane Miejsca</h2>

      <div class="col text-center" v-if="featured.length === 0">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div class="card col-xs-4 col-sm-6 col-md-3 col-lg-2 border-0" v-bind:class="{ 'offset-lg-2': index === 0 }"
           v-bind:key="place.title" v-for="(place, index) in featured">
        <img v-bind:alt="place.image.text" class="card-img-top" v-bind:src="place.image.url">
        <div class="card-body">
          <h4 class="card-title">{{ place.title }} {{ index }}</h4>
          <p class="card-text">{{ place.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    featured: state => state.places.featured
  }),

  created () {
    this.$store.dispatch('places/getFeatured')
  },

  methods: mapActions('places', [
    'getFeatured'
  ])
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
    }
  }
}

.jumbotron {
  background-color: #ffffff;
  border-radius: 0;
  margin: 32px 0;

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

  div.form-group {
    div.input-group {
      input.form-control {
        border-bottom-left-radius: 0.25rem;
        border-color: $skyBaseColor;
        border-style: solid;
        border-top-left-radius: 0.25rem;
        border-width: 1px 0 1px 1px;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        color: #555555;
        font-size: 30px;

        @media (max-width: 768px) {
          font-size: 18px;
        }

        @media (min-width: 768px) and (max-width: 992px) {
          font-size: 24px;
        }

        &:hover, &:focus {
          border-width: 2px 0 2px 2px;
          color: #333333;
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
