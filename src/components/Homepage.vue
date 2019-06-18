<template>
  <div class="row" id="search-row">
    <div class="offset-md-2 col-md-8">
      <div class="jumbotron">
        <form>
          <h1 class="display-6 text-center">Zwiedzaj odwiedzane miasta jak nigdy wcześniej!</h1>

          <div class="form-group">
            <div class="input-group">
              <label class="text-hide" for="search">Wyszukaj miasta</label>
              <input class="form-control amber-border" type="text" id="search" name="search" placeholder="Miasto"
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
  background-color: $skyBaseColor;
}

.jumbotron {
  background-color: #ffffff;
  border-radius: 0;
  margin: 32px 0;

  h1 {
    color: $skyBaseColor;
    font-size: 2.4rem;
    margin-bottom: 32px;
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
      }

      div.input-group-append button {
        background-color: $skyBaseColor;
        border-color: $skyBaseColor;
        color: #ffffff;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
