<template>
  <div>
    <h1>Throughput</h1>
    <vs-button
            class="btn-other"
            color="success"
            type="flat"
            icon="arrow_left"
            size="large"
            to="/responsetime">Response Time</vs-button>
    <vs-row
            vs-align="flex-start"
            vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-lg="6" vs-sm="12" vs-xs="12">
        <KatalysisQuarkusThroughput />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-lg="6" vs-sm="12" vs-xs="12">
        <KatalysisPetclinicThroughput />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
  import KatalysisPetclinicThroughput from "./petclinic/KatalysisPetclinicThroughput";
  import KatalysisQuarkusThroughput from "./quarkus/KatalysisQuarkusThroughput";
  export default {
    name: "KatalysisThroughput",
    components: {KatalysisQuarkusThroughput, KatalysisPetclinicThroughput}
  }
</script>

<style lang="scss" scoped>
.btn-other {
  margin-top: -50px;
}
</style>