<template>
  <div id="app"  class="container-fluid">
    <div class="row" id="navbar-row">
      <div class="col">
        <b-navbar toggleable="md" class="bg-transparent">
          <b-navbar-brand>
            <router-link to="/">
              <font-awesome-icon icon="home" />
            </router-link>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item class="nav-link text-uppercase" to="/featured">{{ $t('navbar.featured') }}</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown v-bind:text="$t('navbar.language')" right>
                <b-dropdown-item class="text-uppercase" v-for="language in $i18n.availableLocales"
                                 v-bind:key="language" v-bind:to="'/' + language">{{ language }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
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

.navbar-brand a, .nav-item a.nav-link, .navbar-toggler {
  color: #555555;

  &:hover, &:focus {
    color: #111111;
  }
}

.nav-item a.nav-link {
  border-bottom: 3px solid transparent;
  transition: border-bottom-color .2s ease-in, color .2s ease-in;

  &.router-link-active, &:hover, &:focus {
    border-color: $groundBaseColor;
  }
}

.navbar-toggler {
  border: none;
}
</style>
