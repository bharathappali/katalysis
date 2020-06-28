<template>
  <vs-row
          vs-align="flex-start"
          vs-type="flex" vs-justify="center" vs-w="12">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="7" vs-lg="7" vs-sm="12" vs-xs="12">
      <div class="side-content">
        <h1 class="submodule-h1">Constant Resources</h1>
        <h3 class="side-heading">Configuration :</h3><br/>
        <p class="config-content">
          Runs are done on a Linux Baremetal server with 16 cpus and 32GB RAM <br/><br/>
          This runs are done with a constant CPU and Memory limits given to the runtimes <br/><br/>
          <strong>Resource Restrictions : </strong>
          4 CPUS | 2GB RAM
        </p>
        <br/>
        <vs-row
                vs-align="flex-start"
                vs-type="flex" vs-justify="center" vs-w="12">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-lg="12" vs-sm="12" vs-xs="12">
            <div class="analysis-section">
              <h2 class="analysis-heading">Analysis</h2>
              <p class="analysis-content">
                <strong>Runc</strong> is <strong>1.4</strong> times <strong>Kata</strong><br/>
                <strong>Runc</strong> is <strong>1.8</strong> times <strong>VM</strong><br/>
                <strong>Kata</strong> is <strong>1.2</strong> times <strong>VM</strong>
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
    name: "QuarkusConstantResources",
    components: {
      ChartModule
    },
    data () {
      return {
        quarkusThroughputChartData: {
          id: "quarkus-throughput-constres-chart",
          labels: ['runc', 'kata', 'vm'],
          title: 'Throughput (Higher the better)',
          type: 'bar',
          height: 500,
          tooltipOptions: {
            formatTooltipX: d => (d + '').toUpperCase(),
            formatTooltipY: d => d + ' tps',
          },
          colors: ['#42b983'],
          datasets: [
            {
              name: "Throughput",
              type: "bar",
              values: [14354, 10084, 7804]
            }
          ],
          showValues: true,
          valuesets: {
            "runc": 14354,
            "kata": 10084,
            "vm": 7804
          },
          isRunc: true,
          isKata: true,
          isVm: true,
          isKataVirtio: false
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
    width: 400px;
  }

  .config-content {
    text-align: left;
  }
</style>