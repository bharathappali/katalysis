<template>
  <div class="katalysis-dashboard">
    <vs-row
            vs-align="flex-start"
            vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-lg="6" vs-sm="10" vs-xs="10">
        <div>
          <!--          Title-->
          <h1 class="katalysis-about-title">Katalysis - Kata container analysis</h1><br/>
          <!--          Description-->
          <p class="katalysis-desc">
            <strong>Kata Containers</strong> is an open source community working to build a secure container
            runtime with lightweight virtual machines that feel and perform like containers,
            but provide stronger workload isolation using hardware virtualization technology
            as a second layer of defense.
          </p>
        </div>
      </vs-col>
    </vs-row>
    <vs-row
            vs-align="flex-start"
            vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-lg="6" vs-sm="10" vs-xs="10">
        <div class="benchmark-section">
          <h2>Benchmarks we tried</h2>
        </div>
      </vs-col>
    </vs-row>
    <vs-row
            vs-align="flex-start"
            vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8" vs-lg="8" vs-sm="10" vs-xs="10">
        <router-link to="/quarkus" class="benchmark-link left-link">
          Quarkus Demo
        </router-link>
        <router-link to="/petclinic" class="benchmark-link right-link">
          Spring Petclinic
        </router-link>
      </vs-col>
    </vs-row>

  </div>
</template>

<script>
  export default {
    name: "Dashboard",
  }
</script>

<style scoped lang="scss">
  .katalysis-about-title {
    color: #42b983;
  }

  .katalysis-desc {
    text-align: left;
  }

  .benchmark-section {
    padding-top: 30px;
  }

  .benchmark-link {
    margin-top: 50px;
    text-align: center;
    padding: 30px;
    background: #2c3e50;
    color: #42b983;
    font-size: xx-large;
  }

  .left-link {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-right: 1px solid #42b983;
  }

  .right-link {
    border-bottom-right-radius: 100px;
    border-top-right-radius: 100px;
    border-right: 1px solid #42b983;
  }

</style>