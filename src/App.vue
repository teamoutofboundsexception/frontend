<template>
  <div id="app"  class="container-fluid">
    <div class="row" id="navbar-row">
      <div class="col">
        <nav class="navbar navbar-dark bg-transparent">
          <router-link class="navbar-brand" to="/"><font-awesome-icon icon="home" /></router-link>

          <router-link class="text-uppercase" to="/featured">Proponowane Miejsca</router-link>
        </nav>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
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
  a, .navbar-brand {
    color: #555555;
    border-bottom: 3px solid transparent;
    transition: border-bottom-color .2s ease-in, color .2s ease-in;

    &:hover, &:focus {
      color: #111111;
    }
  }

  a:not(.navbar-brand) {
    text-decoration: none;
    padding-bottom: 0.3125rem;
    padding-top: 0.3125rem;

    &:hover, &:focus {
      border-color: $groundBaseColor;
    }
  }
}
</style>
