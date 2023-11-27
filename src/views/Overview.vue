<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-right fill-height">
      <v-row class="text-center">
        <v-col>
          <v-card>
            <v-card-item>
              <v-card-title>Median Sales Price</v-card-title>
              <v-card-subtitle>October 2023</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <span :class="$vuetify.display.lgAndUp ? 'text-h2' : 'text-h6'">
                <AnimatedValue :value="860000" format="currency" />
              </span>
              <v-divider class="mt-2"></v-divider>
              <div :class="$vuetify.display.lgAndUp ? 'text-h6 mt-2' : 'mt-2'">
                12-month change
                <div style="color: #39FF14;">
                  <v-icon color="#39FF14" icon="mdi-arrow-up"></v-icon>5.1%
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-item>
              <v-card-title>Number of Homes Sold</v-card-title>
              <v-card-subtitle>October 2023</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <span :class="$vuetify.display.lgAndUp ? 'text-h2' : 'text-h6'">
                <AnimatedValue :value="43" format="plain" />
              </span>
              <v-divider class="mt-2"></v-divider>
              <div :class="$vuetify.display.lgAndUp ? 'text-h6 mt-2' : 'mt-2'">
                12-month change
                <div style="color: #fa0542;">
                  <v-icon color="#fa0542" icon="mdi-arrow-down"></v-icon>40.3%
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-item>
              <v-card-title>Sale to List Price</v-card-title>
              <v-card-subtitle>October 2023</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <span :class="$vuetify.display.lgAndUp ? 'text-h2' : 'text-h6'">
                <AnimatedValue :value="100.3" format="percent" />
              </span>
              <v-divider class="mt-2"></v-divider>
              <div :class="$vuetify.display.lgAndUp ? 'text-h6 mt-2' : 'mt-2'">
                12-month change
                <div style="color: #39FF14;">
                  <v-icon color="#39FF14" icon="mdi-arrow-up"></v-icon>2.1pt
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="tight-top">
        <v-col>
          <span class="text-caption" style="align-self: flex-end; margin-top: auto;">
            Source: <a href="https://www.redfin.com/state/Washington/housing-market" target="#">Redfin</a>
          </span>
        </v-col>
      </v-row>
      <v-card class="mt-2">
        <div v-if="showChart" class="pt-4">
          <ApexChart :series="series" :chartOptions="chartOptions" />
        </div>
        <div v-else>
          <div :style="$vuetify.display.lgAndUp ? 'height: 630px;' : 'height: 330px;'"></div>
        </div>
      </v-card>
      <span class="text-caption" style="align-self: flex-end; margin-top: auto;">
        Source: <a href="https://www.zillow.com/research/data/" target="#">Zillow</a>
      </span>
    </v-responsive>
  </v-container>
</template>
  
<script>
import AnimatedValue from '@/components/AnimatedValue.vue'
import ApexChart from '@/components/ApexChart.vue'

export default {
  components: {
    AnimatedValue,
    ApexChart
  },

  data: () => ({
    showChart: true,
    series: [
      {
        name: "98335",
        data: [
        597449.1178,609937.1133,621829.5881,633022.2848,646050.7857,661035.1636,679531.653,698578.4561,715320.9617,726101.7738,730022.8461,730929.7028,732697.0857,737670.8188,746034.4571,758801.2648,775806.9029,796030.9693,816585.5077,832242.7866,840094.7891,837106.5752,827809.6591,816170.0986,807874.3858,802202.0212,797759.2472,791059.1524,786220.49,782930.4233,783286.6294,784925.2091,789222.3979,795165.8697,801427.4105,806356.9985,809430.0433
        ],
      },
      {
        name: "98333",
        data: [
        734391.8619,749462.4285,764330.7625,779441.1282,796833.4619,815860.7646,836491.8209,858872.4703,880544.5811,901827.9566,915993.0745,927926.0668,937463.3794,950132.8989,964265.9318,981255.3052,1000417.945,1022588.333,1046359.873,1064658.718,1073016.91,1066563.538,1051677.66,1032694.983,1017926.582,1007964.398,1000058.233,989510.5564,983771.3592,982184.7165,987497.9431,989887.0436,994206.7386,998335.6661,1002357.93,1005880.413,1008549.496
        ]
      },
      {
        name: "98332",
        data: [
        610667.0765,622911.8887,634846.7327,646416.5953,659111.2645,673663.7253,690727.9966,708153.5678,723092.3113,733915.4621,739256.2328,742529.5215,746444.5658,753699.9537,763966.9684,776802.5194,791676.7493,809611.926,828729.3653,844147.6733,851166.1427,847096.4788,837486.3244,825897.9108,818587.5587,813732.9104,810657.422,804897.3344,800439.7961,797057.5253,797057.9262,798451.0632,803341.101,810307.4978,817731.5618,823127.7562,825943.0969
        ],
      },
      {
        name: "98329",
        data: [
        431132.3368,441412.181,450754.6999,459825.0875,469262.1528,479303.561,490400.3547,501366.0084,510423.5148,516539.1085,518628.3303,519776.5237,520676.0918,523024.0798,525543.6246,531237.7506,539874.0555,551382.2611,563428.0753,572651.8174,576916.3789,574248.9376,568099.4216,561217.9553,556727.7558,553194.2921,549565.7555,543667.2569,538052.2852,534284.529,533698.0049,535493.1249,539250.1414,544179.8975,549449.4333,553589.7058,556346.4732
        ]
      },
    ],

    chartOptions: {
      chart: {
        height: 350,
        type: "line",
        zoom: false,
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 1,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#1F51FF", "#BC12FE", "#39FF14", "#FF5E00"], // Modified colors for dark theme
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Zillow Home Value Index - Single Family Homes - Gig Harbor & Fox Island",
        align: "left",
        style: {
          color: "lightgrey", // Title text color
        },
      },
      grid: {
        borderColor: "#2b2b2b", // Dark gray border
        row: {
          colors: ["#222222", "transparent"], // Background color for grid rows
          opacity: 0,
        },
      },
      markers: {
        size: 1,
        colors: ["#1F51FF", "#BC12FE", "#39FF14", "#FF5E00"], // Marker colors
      },
      xaxis: {
        type: 'datetime',
        categories: [
          "10/31/2020","11/30/2020","12/31/2020","1/31/2021","2/28/2021","3/31/2021","4/30/2021","5/31/2021","6/30/2021","7/31/2021","8/31/2021","9/30/2021","10/31/2021","11/30/2021","12/31/2021","1/31/2022","2/28/2022","3/31/2022","4/30/2022","5/31/2022","6/30/2022","7/31/2022","8/31/2022","9/30/2022","10/31/2022","11/30/2022","12/31/2022","1/31/2023","2/28/2023","3/31/2023","4/30/2023","5/31/2023","6/30/2023","7/31/2023","8/31/2023","9/30/2023","10/31/2023"
        ],
        title: {
          text: "Month",
          style: {
            color: "lightgrey", // X-axis title color
          },
        },
        labels: {
          formatter: function (val) {
            return new Date(val).toLocaleString('default', { month: 'short', year: '2-digit' });
          },
          style: {
            colors: "lightgrey", // X-axis label color
          },
        },
      },
      yaxis: {
        title: {
          text: "ZHVI",
          style: {
            color: "lightgrey", // Y-axis title color
          },
        },
        labels: {
          style: {
            colors: "lightgrey", // Y-axis label color
          },
          formatter: function (val) {
            return '$' + val.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          }
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
        labels: {
          colors: "lightgrey", // Legend text color
        },
      },

      tooltip: {
        theme: "dark"
      }
    },
  }),

  beforeRouteLeave(to, from, next) {
    this.showChart = false;
    if (to.name !== 'Overview') {
      this.showChart = false;
      next()
    } else {
      this.showChart = true;
      next();
    }
  },
}
</script>

<style>
.tight-top {
  margin-top: -24px !important;
}
</style>