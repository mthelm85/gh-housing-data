<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-right fill-height">
      <v-row class="text-center">
        <v-col>
          <v-card>
            <v-card-item>
              <v-card-title>Median Sales Price</v-card-title>
              <v-card-subtitle>September 2023</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <span class="text-h2">
                <AnimatedValue :value="825000" format="currency" />
              </span>
              <v-divider class="mt-2"></v-divider>
              <div class="text-h6 mt-2">
                12-month change
                <div style="color: #fa0542;">
                  <v-icon color="#fa0542" icon="mdi-arrow-down"></v-icon>1.2%
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-item>
              <v-card-title>Number of Homes Sold</v-card-title>
              <v-card-subtitle>September 2023</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <span class="text-h2">
                <AnimatedValue :value="75" format="plain" />
              </span>
              <v-divider class="mt-2"></v-divider>
              <div class="text-h6 mt-2">
                12-month change
                <div style="color: #fa0542;">
                  <v-icon color="#fa0542" icon="mdi-arrow-down"></v-icon>13.8%
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-item>
              <v-card-title>Sale to List Price</v-card-title>
              <v-card-subtitle>September 2023</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <span class="text-h2">
                <AnimatedValue :value="99.0" format="percent" />
              </span>
              <v-divider class="mt-2"></v-divider>
              <div class="text-h6 mt-2">
                12-month change
                <div style="color: #39FF14;">
                  <v-icon color="#39FF14" icon="mdi-arrow-up"></v-icon>0.5pt
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
          <div style="height: 630px;"></div>
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
          592228.5587, 603865.0407, 616487.143, 628507.3294, 639820.2229, 652988.6351, 668133.9281, 686829.0488, 706080.3928,
          723002.6939, 733899.2796, 737862.4598, 738779.0551, 740565.4177, 745592.563, 754046.0172, 766949.9259, 784138.1851,
          804579.435, 825354.7057, 841180.126, 849116.45, 846096.1461, 836699.3917, 824934.8356, 816550.0363, 810816.7569,
          806326.2726, 799554.2265, 794663.6024, 791338.204, 791698.2354, 793354.4116, 797697.7472, 803705.0452, 810033.8279,
          815016.354
        ],
      },
      {
        name: "98333",
        data: [
          732413.8111, 744703.5225, 759985.6963, 775062.7979, 790385.3295, 808021.8705, 827316.3372, 848237.076, 870931.974,
          892908.3848, 914490.6021, 928854.6137, 940955.1582, 950626.385, 963473.7983, 977805.2744, 995033.1971, 1014464.901,
          1036946.586, 1061051.903, 1079607.685, 1088083.235, 1081539.25, 1066444.358, 1047195.144, 1032219.379, 1022117.315,
          1014100.139, 1003404.361, 997584.5792, 995975.6583, 1001363.488, 1003786.134, 1008166.483, 1012353.385, 1016432.126,
          1020004.068
        ]
      },
      {
        name: "98332",
        data: [
          607370.8732, 618322.6354, 630720.9533, 642805.4171, 654520.324, 667374.1386, 682109.0346, 699387.2302, 717031.2552, 732157.2765,
          743116.1105, 748523.8352, 751838.1591, 755802.2839, 763148.6282, 773544.3541, 786540.8165, 801601.5156, 819761.5346, 839118.6376,
          854730.2354, 861836.6911, 857716.0083, 847985.3772, 836251.6868, 828849.6893, 823934.1813, 820820.1373, 814987.8391, 810474.4193,
          807049.7471, 807050.153, 808460.7549, 813412.0961, 820465.8264, 827982.9613, 833446.8045
        ],
      },
      {
        name: "98329",
        data: [
          426402.7058, 436110.6288, 446509.1745, 455959.5717, 465134.6951, 474680.7304, 484838.0869, 496063.0155, 507155.2897, 516317.3833,
          522503.5938, 524616.94, 525778.3916, 526688.347, 529063.4472, 531612.0853, 537371.9614, 546107.9899, 557749.0809, 569933.9883,
          579264.2371, 583578.0416, 580879.7993, 574659.2747, 567698.348, 563156.3001, 559582.0355, 555911.6001, 549944.9914, 544265.1835,
          540453.921, 539860.6243, 541676.4726, 545476.8714, 550463.5515, 555793.9347, 559982.015
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
          "9/30/2020", "10/31/2020", "11/30/2020", "12/31/2020", "1/31/2021", "2/28/2021", "3/31/2021", "4/30/2021",
          "5/31/2021", "6/30/2021", "7/31/2021", "8/31/2021", "9/30/2021", "10/31/2021", "11/30/2021", "12/31/2021",
          "1/31/2022", "2/28/2022", "3/31/2022", "4/30/2022", "5/31/2022", "6/30/2022", "7/31/2022", "8/31/2022",
          "9/30/2022", "10/31/2022", "11/30/2022", "12/31/2022", "1/31/2023", "2/28/2023", "3/31/2023", "4/30/2023",
          "5/31/2023", "6/30/2023", "7/31/2023", "8/31/2023", "9/30/2023"
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