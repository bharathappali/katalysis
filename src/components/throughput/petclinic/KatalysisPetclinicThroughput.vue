<template>
  <vs-row
          vs-align="flex-start"
          vs-type="flex" vs-justify="center" vs-w="12">
    <vs-col vs-justify="center" vs-align="center" vs-w="11" vs-lg="11" vs-sm="12" vs-xs="12">
      <h1>Petclinic</h1>
      <div style="width: 100% !important;">
        <ChartModule :chart-data="petclinicThroughputChartData"/>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
  import ChartModule from "../../ChartModule";

  export default {
    name: "KatalysisPetclinicThroughput",
    components: {ChartModule},
    data () {
      return {
        petclinicThroughputChartData: {
          id: "petclinic-throughput-summary-chart",
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
              values: [890, 677, 714, 698, 542]
            }
          ],
          showValues: true,
          valuesets: [
            {
              'runc': 890,
              'kata': 677,
              'kata-virtio-fs' : 714,
              'kata-virtio-fs + xtune' : 698,
              'vm' : 542,
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