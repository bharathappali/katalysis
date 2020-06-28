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
    name: "QuarkusThroughputSummary",
    components: {ChartModule},
    data () {
      return {
        quarkusThroughputChartData: {
          id: "quarkus-throughput-summary-chart",
          labels: ['runc', 'kata', 'kata-virtio-fs','vm'],
          title: 'Throughput (Higher the better)',
          type: 'bar',
          height: 500,
          tooltipOptions: {
            formatTooltipX: d => (d + '').toUpperCase(),
            formatTooltipY: d => d + ' tps',
          },
          colors: ['#42b983', '#2c3e50', '#3369e8'],
          datasets: [
            {
              name: "Baseline",
              type: "bar",
              values: [2337, 517, 0, 0]
            },
            {
              name: "Const Res",
              type: "bar",
              values: [14354, 10084, 0, 7804]
            },
            {
              name: "virtio-fs",
              type: "bar",
              values: [15317, 7804, 5769, 0]
            }
          ],
          showValues: true,
          valuesets: [
            {
              "runc": 2337,
              "kata": 517,
              "kata-virtio-fs": 0,
              "vm": 0
            },
            {
              "runc": 14354,
              "kata": 10084,
              "kata-virtio-fs": 0,
              "vm": 7804
            },
            {
              "runc": 15317,
              "kata": 7804,
              "kata-virtio-fs": 5769,
              "vm": 0
            }
          ],
          isRunc: true,
          isKata: true,
          isVm: true,
          isKataVirtio: true
        },
      }
    }
  }
</script>

<style scoped>

</style>