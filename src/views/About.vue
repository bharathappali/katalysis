<template>
  <div class="about">
    <vs-row
            vs-align="flex-start"
            vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" vs-lg="6" vs-sm="10" vs-xs="10">
        <div>
<!--          Title-->
          <h1 class="katalysis-about-title">Katalysis - Kata container analysis</h1><br/>
<!--          Description-->
          <p class="katalysis-about-desc">
              Goal of this project is to analyse the performance of <strong>kata container runtime</strong> launched via <i>Docker</i> and compare the results with
            <strong>runc runtime</strong> and <strong>Virtual Machine</strong>
          </p>
<!--          Mentors-->
          <h2 class="katalysis-about-mentors">Mentors</h2>
<!--          Mentors list in alphabetical order-->
          <ul class="mentors-list">
            <li>Dinakar Guniguntala</li>
            <li>Ramya Kaddi</li>
          </ul>
<!--          Team-->
          <h2 class="katalysis-about-team">Team</h2>
<!--          Team list in alphabetical order-->
          <ul class="team-list">
            <li>Ashwini Rawat</li>
            <li>Avani Goel</li>
            <li>Rose Verma</li>
          </ul>
        </div>
      </vs-col>

    </vs-row>
  </div>
</template>
<style scoped>
  .about {

  }

  .katalysis-about-title {
    color: #42b983;
  }

  .katalysis-about-desc {
    font-size: medium;
    color: #2c3e50;
  }

  .katalysis-about-mentors {
    padding-top: 30px;
    color: #42b983;
  }

  .mentors-list {
    cursor: pointer;
    list-style-type: none;
    font-size: large;
    font-weight: 900;
    color: #2c3e50;
  }

  .katalysis-about-team {
    padding-top: 30px;
    color: #42b983;
  }

  .team-list {
    cursor: pointer;
    list-style-type: none;
    font-size: large;
    font-weight: 900;
    color: #2c3e50;
  }
</style>
