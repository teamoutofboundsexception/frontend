<template>
  <div id="app"  class="container-fluid">
    <div class="row" id="navbar-row">
      <div class="col">
        <nav class="navbar navbar-dark bg-transparent">
          <router-link class="navbar-brand" to="/"><font-awesome-icon icon="home" /></router-link>
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

.navbar-dark .navbar-brand {
  color: #555555;
  border-bottom: 3px solid transparent;

  &:hover, &:focus {
    color: #111111;
  }

  &:not(:first-child) {
    &:hover, &:focus {
      border-color: $groundBaseColor;
    }
  }
}
</style>
