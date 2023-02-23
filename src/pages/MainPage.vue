<template>
      <div>
            <h1>Tasks Progress</h1>

            <loading-anim v-if="!isResponse">
                  {{ fetchTasks }}
            </loading-anim>

            <Transition v-else>
                  <div class="pieChart">
                        <apexchart
                              width="500"
                              :options="chartOptions"
                              :series="series"
                        >
                        </apexchart>
                  </div>
            </Transition>
      </div>
</template>
<script>
      import VueApexCharts from "vue3-apexcharts";
      import TodoNav from "@/components/TodoNav.vue";
      export default {
            components: {
                  apexchart: VueApexCharts,
                  TodoNav,
            },
            data() {
                  return {
                        series: [],
                        chartOptions: {
                              chart: {
                                    width: 380,
                                    type: "pie",
                              },
                              labels: ["Completed", "No complited"],

                              colors: ["#66bb6a", "#0d3d13"],
                              legend: {
                                    show: false,
                              },
                        },
                        isResponse: false,
                  };
            },
            methods: {
                  getChartInfo(t) {
                        let completedTasks = 0;
                        let noCompletedTasks = 0;

                        for (var i = 0; i <= t.length - 1; i++) {
                              if (t[i].isCompleted) completedTasks++;
                              else noCompletedTasks++;
                        }

                        this.series = [completedTasks, noCompletedTasks];
                        this.isResponse = true;
                  },
            },
            computed: {
                  fetchTasks() {
                        fetch(
                              "https://63f64c329daf59d1ad866b42.mockapi.io/tasks"
                        )
                              .then((res) => {
                                    return res.json();
                              })
                              .then(this.getChartInfo);
                  },
            },
      };
</script>
<style scoped>
      .v-enter-active,
      .v-leave-active {
            transition: opacity 0.1s ease;
      }

      .v-enter-from,
      .v-leave-to {
            opacity: 0;
      }
      h1 {
            font-size: 75px;
            text-align: center;
            padding-top: 35px;
            font-weight: 500;
            color: #66bb6a;
      }
      .pieChart {
            width: 500px;
            margin: 0 auto;
            padding-top: 110px;
      }
</style>
