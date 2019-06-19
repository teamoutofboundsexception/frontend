<template>
  <div id="app"  class="container-fluid">
    <div class="row" id="navbar-row">
      <div class="col">
        <nav class="navbar navbar-expand-md navbar-dark bg-transparent">
          <router-link class="navbar-brand" to="/"><font-awesome-icon icon="home" /></router-link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <font-awesome-icon icon="bars" />
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="text-uppercase" to="/featured">{{ $t('navbar.featured') }}</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  beforeMount () {
    const browserLanguage = window.navigator.language

    if (this.$i18n.availableLocales.filter(language => language === browserLanguage).length > 0) {
      this.$i18n.locale = browserLanguage
    }
  },

  name: 'App'
}
</script>

<style lang="scss">
@import '@/styles/colors.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 768px) {
  .row#navbar-row {
    border-bottom: 2px solid $skyBaseColor;
  }
}

.navbar-dark {
  a, .navbar-brand, .navbar-toggler {
    color: #555555;

    &:hover, &:focus {
      color: #111111;
    }
  }

  a, .navbar-brand {
    border-bottom: 3px solid transparent;
    transition: border-bottom-color .2s ease-in, color .2s ease-in;
  }

  a:not(.navbar-brand) {
    margin: 0 8px;
    padding-bottom: 0.3125rem;
    padding-top: 0.3125rem;
    text-decoration: none;

    &:hover, &:focus, &.router-link-active {
      border-color: $groundBaseColor;
    }
  }
}
</style>
