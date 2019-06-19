<template>
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
                  <font-awesome-icon icon="search" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'name': 'wowow!'
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.row#search-row {
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
        border: 1px solid $skyBaseColor;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        font-size: 30px;

        @media (max-width: 768px) {
          font-size: 18px;
        }

        @media (min-width: 768px) and (max-width: 992px) {
          font-size: 24px;
        }
      }

      div.input-group-append button {
        background-color: $skyBaseColor;
        border-color: $skyBaseColor;
        color: #ffffff;
        font-size: 30px;

        @media (max-width: 768px) {
          font-size: 18px;
        }

        @media (min-width: 768px) and (max-width: 992px) {
          font-size: 24px;
        }
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
