<template>
  <vs-row
          vs-align="flex-start"
          vs-type="flex" vs-justify="center" vs-w="12">
    <vs-col vs-justify="center" vs-align="center" vs-w="8" vs-lg="8" vs-sm="12" vs-xs="12">
      <div style="width: 100% !important;">
        <ChartModule :chart-data="quarkusThroughputChartData"/>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
  import ChartModule from "../../ChartModule";

  export default {
    name: "QuarkusResponseSummary",
    components: {ChartModule},
    data () {
      return {
        quarkusThroughputChartData: {
          id: "quarkus-responsetime-summary-chart",
          labels: ['runc', 'kata', 'kata-virtio-fs','vm'],
          title: 'First Response Time (Lower the better)',
          type: 'bar',
          height: 500,
          tooltipOptions: {
            formatTooltipX: d => (d + '').toUpperCase(),
            formatTooltipY: d => d + ' ms',
          },
          colors: ['#42b983', '#2c3e50', '#3369e8'],
          datasets: [
            {
              name: "Baseline",
              type: "bar",
              values: [10079, 23515, 0, 0]
            },
            {
              name: "Const Res",
              type: "bar",
              values: [5232, 7502, 0, 19237]
            },
            {
              name: "virtio-fs",
              type: "bar",
              values: [5232, 7502, 6736, 0]
            }
          ],
          showValues: true,
          valuesets: [
            {
              "runc": 10079,
              "kata": 23515,
              "kata-virtio-fs": 0,
              "vm": 0
            },
            {
              "runc": 5232,
              "kata": 7502,
              "kata-virtio-fs": 0,
              "vm": 19237
            },
            {
              "runc": 5232,
              "kata": 7502,
              "kata-virtio-fs": 6736,
              "vm": 0
            }
          ],
          isRunc: true,
          isKata: true,
          isVm: true,
          isKataVirtio: true,
          isKataXtune: false,
          isKataVirtioXtune: false,
          isVmXtune: false
        },
      }
    }
  }
</script>

<style scoped>

</style>