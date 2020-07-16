<template>
  <div>
    <vs-row
            vs-align="flex-start"
            vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-lg="6" vs-sm="12" vs-xs="12">
        <KatalysisQuarkusResponseTime />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-lg="6" vs-sm="12" vs-xs="12">
        <KatalysisPetclinicResponseTime />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
  import KatalysisPetclinicResponseTime from "./petclinic/KatalysisPetclinicResponseTime";
  import KatalysisQuarkusResponseTime from "./quarkus/KatalysisQuarkusResponseTime";
  export default {
    name: "KatalysisResponseTime",
    components: {KatalysisQuarkusResponseTime, KatalysisPetclinicResponseTime}
  }
</script>

<style lang="scss">
  .dataset-2 .data-point-value {
    fill: #000000 !important;
    dominant-baseline: text-after-edge;
    font-size: 15px;
  }

  .dataset-1 .data-point-value {
    fill: #FFFFFF !important;
    font-size: 13px;
    dominant-baseline: text-before-edge;
  }

  .dataset-0 .data-point-value {
    fill: #FFFFFF !important;
    font-size: 13px;
    dominant-baseline: text-before-edge;
  }

</style>