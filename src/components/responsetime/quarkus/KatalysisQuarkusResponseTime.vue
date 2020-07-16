<template>
  <vs-row
          vs-align="flex-start"
          vs-type="flex" vs-justify="center" vs-w="12">
    <vs-col vs-justify="center" vs-align="center" vs-w="11" vs-lg="11" vs-sm="12" vs-xs="12">
      <h1>Quarkus</h1>
      <div style="width: 100% !important;">
        <ChartModule :chart-data="quarkusResponseTimeChartData"/>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
  import ChartModule from "../../ChartModule";

  export default {
    name: "KatalysisQuarkusResponseTime",
    components: {ChartModule},
    data () {
      return {
        quarkusResponseTimeChartData: {
          id: "quarkus-responsetime-summary-chart",
          labels: ['runc', 'kata', 'kata-virtio-fs', 'kata-virtio-fs + xtune','vm'],
          title: 'First Response Time (Lower the better)',
          type: 'bar',
          height: 500,
          barOptions: {
            stacked: 1,
          },
          tooltipOptions: {
            formatTooltipX: d => (d + '').toUpperCase(),
            formatTooltipY: d => d + ' ms',
          },
          colors: ['#42b983', '#2c3e50', '#3369e8'],
          datasets: [
            {
              name: "Cont/VM ST",
              type: "bar",
              values: [1755, 2303, 2182, 2296, 16000]
            },
            {
              name: "App ST",
              type: "bar",
              values: [2451, 3510, 2871, 2888, 2928]
            },
            {
              name: "Response Time",
              type: "bar",
              values: [242, 341, 292, 285, 346]
            }
          ],
          showValues: true,
          valuesets: [
            {
              'runc': 1755,
              'kata': 2303,
              'kata-virtio-fs' : 2182,
              'kata-virtio-fs + xtune' : 2296,
              'vm' : 16000,
            },
            {
              'runc': 2451,
              'kata': 3510,
              'kata-virtio-fs' : 2871,
              'kata-virtio-fs + xtune' : 2888,
              'vm' : 2928,
            },
            {
              'runc': 242,
              'kata': 341,
              'kata-virtio-fs' : 292,
              'kata-virtio-fs + xtune' : 285,
              'vm' : 346,
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

<style lang="scss" scoped>

</style>