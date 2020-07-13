<template>
  <div>
    <div id="petclinic-nav">
<!--      <router-link to="/petclinic/throughput" class="left-link">Throughput Comparisons</router-link>-->
      <router-link to="/petclinic/responsetime" class="right-link">Response Time Comparisons</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Petclinic"
  }
</script>

<style scoped lang="scss">
  .left-link {
    margin-right: 30px;
  }

  .right-link {
    margin-left: 30px;
  }

  #petclinic-nav {
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
        border: 1px solid #2c3e50;
      }

      &.router-link-exact-active:hover {
        color: #FFFFFF;
      }
    }
  }
</style>