<template>
  <div>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
        <vs-button color="rgb(66, 185, 131)" type="filled" @click="setAllLabels()">All</vs-button>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="1" v-if="isRunc">
        <vs-checkbox color="#42b983" v-model="chartLabels" @change="optsChanged($event)" icon="done" vs-value="runc">runc</vs-checkbox>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="1" v-if="isKata">
        <vs-checkbox color="#42b983" v-model="chartLabels" @change="optsChanged($event)" icon="done" vs-value="kata">kata</vs-checkbox>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" v-if="isKataXtune">
        <vs-checkbox color="#42b983" v-model="chartLabels" @change="optsChanged($event)" icon="done" vs-value="kata + xtune">kata + xtune</vs-checkbox>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" v-if="isKataVirtio">
        <vs-checkbox color="#42b983" v-model="chartLabels" @change="optsChanged($event)" icon="done" vs-value="kata-virtio-fs">Kata [virtio-fs]</vs-checkbox>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" v-if="isKataVirtioXtune">
        <vs-checkbox color="#42b983" v-model="chartLabels" @change="optsChanged($event)" icon="done" vs-value="kata-virtio-fs + xtune">Kata [virtio-fs] + xtune</vs-checkbox>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="1" v-if="isVm">
        <vs-checkbox color="#42b983" v-model="chartLabels" @change="optsChanged($event)" icon="done" vs-value="vm">VM</vs-checkbox>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" v-if="isVmXtune">
        <vs-checkbox color="#42b983" v-model="chartLabels" @change="optsChanged($event)" icon="done" vs-value="vm + xtune">VM + Xtune</vs-checkbox>
      </vs-col>
    </vs-row>
    <vue-frappe
            :valuesOverPoints="showValues"
            :id="chartId"
            :labels="chartLabels"
            :title="chartTitle"
            :type="chartType"
            :height="chartHeight"
            :tooltipOptions="chartTooltipOptions"
            :colors="chartColors"
            :dataSets="chartDatasets"
            :barOptions="chartBarOptions">
    </vue-frappe>
  </div>
</template>

<script>
    export default {
        name: "ChartModule",
        props: {
          chartData: {
              type: Object,
              required: true
          }
        },
        methods: {
          setAllLabels: function () {
            this.chartLabels = this.chartData['labels'];
            for (var i = 0; i < this.chartDatasets.length; i++) {
                this.chartDatasets[i].values = this.getValues(i);
            }
          },
          // eslint-disable-next-line no-unused-vars
          optsChanged: function (event) {
              for (var i = 0; i < this.chartDatasets.length; i++) {
                  this.chartDatasets[i].values = this.getValues(i);
              }
          },
          getValues: function (index) {
            var arr = [];
            for (var i = 0; i < this.chartLabels.length; i++) {
                arr.push(this.valueMap[index][this.chartLabels[i]]);
            }
            return arr;
          }
        },
        data () {
            return {
                valueMap: this.chartData['valuesets'],
                chartId: this.chartData['id'],
                chartLabels: this.chartData['labels'],
                chartTitle: this.chartData['title'],
                chartType: this.chartData['type'],
                chartHeight: this.chartData['height'],
                chartTooltipOptions: this.chartData['tooltipOptions'],
                chartColors: this.chartData['colors'],
                chartDatasets: this.chartData['datasets'],
                chartBarOptions: this.chartData['barOptions'],
                showValues: this.chartData['showValues'],
                isRunc: this.chartData['isRunc'],
                isKata: this.chartData['isKata'],
                isVm: this.chartData['isVm'],
                isKataVirtio: this.chartData['isKataVirtio'],
                isKataXtune: this.chartData['isKataXtune'],
                isVmXtune: this.chartData['isVmXtune'],
                isKataVirtioXtune: this.chartData['isKataVirtioXtune'],
            }
        }
    }
</script>

<style scoped>

</style>