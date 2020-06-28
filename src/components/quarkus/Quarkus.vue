<template>
  <div>
    <vs-row
            vs-align="flex-start"
            vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="7" vs-lg="7" vs-sm="12" vs-xs="12">
        <h1>Throughput Comparisons</h1>
      </vs-col>
      <vs-col vs-justify="center" vs-align="center" vs-w="5" vs-lg="5" vs-sm="12" vs-xs="12">
        <div class="links-holder" vs-w="12">
          <router-link to="/quarkus">Baseline</router-link> |
          <router-link to="/quarkus/constResources">Constant Resources</router-link> |
          <router-link to="/quarkus/virtiofs">With virtio-fs</router-link> |
          <router-link to="/quarkus/summary">Summary</router-link>
        </div>
      </vs-col>
      <vs-col vs-justify="center" vs-align="center" vs-w="12" vs-lg="12" vs-sm="12" vs-xs="12">
        <router-view/>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
  export default {
    name: "Quarkus"
  }
</script>

<style scoped lang="scss">
  .links-holder {
    padding: 20px
  }

  a {
    font-weight: bold;
    color: #2c3e50;

  &.router-link-exact-active {
     color: #42b983;
   }
  }
</style>