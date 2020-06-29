<template>
  <vs-row
          vs-align="flex-start"
          vs-type="flex" vs-justify="center" vs-w="12">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="7" vs-lg="7" vs-sm="12" vs-xs="12">
      <div class="side-content">
        <h1 class="submodule-h1">Baseline</h1>
        <h3 class="side-heading">Configuration :</h3><br/>
        <p class="config-content">
          Runs are done on a Local Linux machine (personal computer) with 4 cpus and 8GB RAM <br/><br/>
          <strong>Runc</strong> by default takes all the available CPU's and RAM on the host <br/>
          <strong>Kata</strong> by default takes only 1 CPU and 2 GB of RAM on the host <br/>
        </p>
        <br/>
        <vs-row
                vs-align="flex-start"
                vs-type="flex" vs-justify="center" vs-w="12">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-lg="12" vs-sm="12" vs-xs="12">
            <div class="analysis-section">
              <h2 class="analysis-heading">Analysis</h2>
              <p class="analysis-content">
                <strong>Runc</strong> is <strong>2.3</strong> times <strong>Kata</strong>
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
    name: "QuarkusResponseBaseline",
    components: {ChartModule},
    data () {
      return {
        quarkusThroughputChartData: {
          id: "quarkus-responsetime-baseline-chart",
          labels: ['runc', 'kata'],
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
              values: [10079, 23515]
            }
          ],
          showValues: true,
          valuesets: [{
            "runc": 10079,
            "kata": 23515
          }],
          isRunc: true,
          isKata: true,
          isVm: false,
          isKataVirtio: false
        },
      }
    }
  }
</script>

<style scoped lang="scss">
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