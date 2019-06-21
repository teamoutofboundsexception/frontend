<template>
  <div id="app"  class="container-fluid">
    <div class="row" id="navbar-row">
      <div class="col">
        <b-navbar toggleable="md" class="bg-transparent">
          <b-navbar-brand>
            <router-link v-bind:to="'/' + $i18n.locale">
              <font-awesome-icon icon="home" />
            </router-link>
          </b-navbar-brand>

<!--          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

<!--          <b-collapse id="nav-collapse" is-nav>-->
<!--            <b-navbar-nav>-->
<!--              <b-nav-item class="nav-link text-uppercase" v-bind:to="'/' + $i18n.locale + '/featured'">{{ $t('navbar.featured') }}</b-nav-item>-->
<!--            </b-navbar-nav>-->

<!--            <b-navbar-nav class="ml-auto" v-if="$i18n.availableLocales.length > 1">-->
<!--              <b-nav-item-dropdown v-bind:text="$t('navbar.language')" right>-->
<!--                <b-dropdown-item class="text-uppercase" v-for="language in $i18n.availableLocales"-->
<!--                                 v-bind:key="language"-->
<!--                                 v-bind:to="getLinkForLanguage(language)">{{ language }}</b-dropdown-item>-->
<!--              </b-nav-item-dropdown>-->
<!--            </b-navbar-nav>-->
<!--          </b-collapse>-->
        </b-navbar>
      </div>
    </div>

    <router-view/>

    <div class="row" id="footer-row">
      <div class="col text-center" id="footer-copyright">
        <span>&copy; 2019 Copyright <a href="http://github.com/teamoutofboundsexception/">TeamOutOfBoundException</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getLinkForLanguage (language) {
      const path = this.$route.fullPath.split('/')
      path[1] = language
      return path.join('/')
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
  transition: color .2s ease-in;

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

div#footer-row {
  margin-top: 16px;

  span {
    border-top: 1px solid $groundBaseColor;
    display: inline-block;
    padding: 0 16px;
  }

  a {
    color: $groundBaseColor;
    font-weight: bold;
    transition: color .2s ease-in;

    &:hover, &:focus {
      color: $skyBaseColor;
      text-decoration: none;
    }
  }
}
</style>
