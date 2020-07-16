<template>
  <vs-row
          vs-align="flex-start"
          vs-type="flex" vs-justify="center" vs-w="12">
    <vs-col vs-justify="center" vs-align="center" vs-w="11" vs-lg="11" vs-sm="12" vs-xs="12">
      <h1>Quarkus</h1>
      <div style="width: 100% !important;">
        <ChartModule :chart-data="quarkusThroughputChartData"/>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
  import ChartModule from "../../ChartModule";

  export default {
    name: "KatalysisQuarkusThroughput",
    components: {ChartModule},
    data () {
      return {
        quarkusThroughputChartData: {
          id: "quarkus-throughput-summary-chart",
          labels: ['runc', 'kata', 'kata-virtio-fs', 'kata-virtio-fs + xtune','vm'],
          title: 'Throughput (Higher the better)',
          type: 'bar',
          height: 500,
          barOptions: {
            stacked: 0,
          },
          tooltipOptions: {
            formatTooltipX: d => (d + '').toUpperCase(),
            formatTooltipY: d => d + ' tps',
          },
          colors: ['#42b983'],
          datasets: [
            {
              name: "Throughput",
              type: "bar",
              values: [18656, 3180, 3221, 3135, 7804]
            }
          ],
          showValues: true,
          valuesets: [
            {
              'runc': 18656,
              'kata': 3180,
              'kata-virtio-fs' : 3221,
              'kata-virtio-fs + xtune' : 3135,
              'vm' : 7804,
            }
          ],
          isRunc: true,
          isKata: true,
          isVm: true,
          isKataVirtio: true,
          isKataXtune: false,
          isKataVirtioXtune: true,
          isVmXtune: false
        },
      }
    }

  }
</script>

<style scoped>

</style>