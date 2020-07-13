<template>
  <vs-row
          vs-align="flex-start"
          vs-type="flex" vs-justify="center" vs-w="12">
    <vs-col vs-justify="center" vs-align="center" vs-w="8" vs-lg="8" vs-sm="12" vs-xs="12">
      <div style="width: 100% !important;">
        <ChartModule :chart-data="petclinicThroughputChartData"/>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
  import ChartModule from "../../ChartModule";

  export default {
    name: "PetclinicResponseSummary",
    components: {ChartModule},
    data () {
      return {
        petclinicThroughputChartData: {
          id: "quarkus-responsetime-summary-chart",
          labels: ['runc', 'kata', 'kata + xtune', 'kata-virtio-fs', 'kata-virtio-fs + xtune','vm', 'vm + xtune'],
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
              values: [1888, 2582, 2571, 2474, 2515, 16101, 16101]
            },
            {
              name: "App ST",
              type: "bar",
              values: [8274, 11496, 11442, 9390, 9361, 8773, 8726]
            },
            {
              name: "Response Time",
              type: "bar",
              values: [799, 1051, 1020, 868, 831, 855, 841]
            }
          ],
          showValues: true,
          valuesets: [
            {
              'runc': 1888,
              'kata': 2582,
              'kata + xtune' : 2571,
              'kata-virtio-fs' : 2474,
              'kata-virtio-fs + xtune' : 2515,
              'vm' : 16101,
              'vm + xtune' : 16101
            },
            {
              'runc': 8274,
              'kata': 11496,
              'kata + xtune' : 11442,
              'kata-virtio-fs' : 9390,
              'kata-virtio-fs + xtune' : 9361,
              'vm' : 8773,
              'vm + xtune' : 8726
            },
            {
              'runc': 799,
              'kata': 1051,
              'kata + xtune' : 1020,
              'kata-virtio-fs' : 868,
              'kata-virtio-fs + xtune' : 831,
              'vm' : 855,
              'vm + xtune' : 841
            }
          ],
          isRunc: true,
          isKata: true,
          isVm: true,
          isKataVirtio: true,
          isKataXtune: true,
          isKataVirtioXtune: true,
          isVmXtune: true
        },
      }
    }

  }
</script>

<style scoped>

</style>