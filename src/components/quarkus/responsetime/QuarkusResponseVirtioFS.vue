<template>
  <vs-row
          vs-align="flex-start"
          vs-type="flex" vs-justify="center" vs-w="12">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="7" vs-lg="7" vs-sm="12" vs-xs="12">
      <div class="side-content">
        <h1 class="submodule-h1">With Virtio-FS</h1>
        <h3 class="side-heading">Configuration :</h3><br/>
        <p class="config-content">
          Runs are done on a Linux Baremetal server with 16 cpus and 32GB RAM <br/><br/>
          This runs are done with a constant CPU and Memory limits given to the runtimes <br/><br/>
          <strong>Resource Restrictions : </strong>
          4 CPUS | 2GB RAM <br/><br/>
          We compare <strong>runc</strong>, <strong>kata (with qemu and 9pfs)</strong> and <strong>kata (with qemu and virtio-fs)</strong>
        </p>
        <br/>
        <vs-row
                vs-align="flex-start"
                vs-type="flex" vs-justify="center" vs-w="12">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-lg="12" vs-sm="12" vs-xs="12">
            <div class="analysis-section">
              <h2 class="analysis-heading">Analysis</h2>
              <p class="analysis-content">
                <strong>Runc</strong> is <strong>1.4</strong> times <strong>Kata (with qemu and 9pfs)</strong><br/>
                <strong>Runc</strong> is <strong>1.1</strong> times <strong>Kata (with qemu and virtio-fs)</strong><br/>
                <strong>Kata (with qemu and virtio-fs)</strong> is <strong>1.1</strong> times <strong>Kata (with qemu and 9pfs)</strong>
              </p>
            </div>
          </vs-col>
        </vs-row>
      </div>
    </vs-col>
    <vs-col vs-justify="center" vs-align="center" vs-w="5" vs-lg="5" vs-sm="12" vs-xs="12">
      <div style="width: 100% !important;">
        <ChartModule :chart-data="quarkusThroughputChartData"/>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
  import ChartModule from "../../ChartModule";
  export default {
    name: "QuarkusResponseVirtioFS",
    components: {ChartModule},
    data () {
      return {
        quarkusThroughputChartData: {
          id: "quarkus-responsetime-virtiofs-chart",
          labels: ['runc', 'kata', 'kata-virtio-fs'],
          title: 'First Response Time (Lower the better)',
          type: 'bar',
          height: 500,
          tooltipOptions: {
            formatTooltipX: d => (d + '').toUpperCase(),
            formatTooltipY: d => d + ' ms',
          },
          colors: ['#42b983'],
          datasets: [
            {
              name: "Response Time",
              type: "bar",
              values: [5232, 7502, 6736]
            }
          ],
          showValues: true,
          valuesets: [{
            "runc": 5232,
            "kata": 7502,
            "kata-virtio-fs": 6736,
          }],
          isRunc: true,
          isKata: true,
          isVm: false,
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
  .submodule-h1 {
    color: #42b983;
    text-decoration: underline;
    text-decoration-color: #2c3e50;
  }

  .side-content {
    width: 100%;
    padding: 0px 0px 0px 50px;
  }

  .side-heading {
    text-align: left;
  }

  .analysis-heading {
    color: #2c3e50;
  }

  .analysis-content {
    background: #2c3e50;
    color: #42b983;
    padding: 30px;
    border-radius: 5px;
    font-size: large;
  }

  .analysis-section {
    width: 600px;
  }

  .config-content {
    text-align: left;
  }
</style>