<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Katalysis-Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'M PLUS Rounded 1c', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nprogress .bar {
  background: #42b983 !important;
}

#nav {
  padding: 20px 30px 30px 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px 30px 10px 30px;
    border: 1px solid #42b983;
    border-radius: 5px;

    &:hover {
      background: #42b983;
      color: #FFFFFF;
    }

    &.router-link-exact-active {
      color: #42b983;
    }

    &.router-link-exact-active:hover {
      color: #FFFFFF;
    }
  }
}
</style>
