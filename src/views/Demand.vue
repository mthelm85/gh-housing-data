<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-right fill-height">
            <v-row class="text-center">
                <v-col>
                    <v-card>
                        <v-card-item>
                            <v-card-title>Number of Homes Sold</v-card-title>
                            <v-card-subtitle>October 2023</v-card-subtitle>
                        </v-card-item>

                        <v-card-text>
                            <v-table>
                                <thead>
                                    <tr>
                                        <th class="text-center">Zip Code</th>
                                        <th class="text-center">Sold</th>
                                        <th class="text-center">12-Month Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="place in sold" :key="place.zip">
                                        <td>{{ place.zip }}</td>
                                        <td>
                                            <AnimatedValue :value="place.sold" format="plain" />
                                        </td>
                                        <td :style="`color: ${place.diff < 0 ? '#fa0542' : '#39FF14'}`">
                                            <v-icon :color="place.diff < 0 ? '#fa0542' : '#39FF14'"
                                                :icon="place.diff < 0 ? 'mdi-arrow-down' : 'mdi-arrow-up'">
                                            </v-icon>
                                            {{ place.diff.toFixed(2) }}%
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-card-item>
                            <v-card-title>Average Days on Market</v-card-title>
                            <v-card-subtitle>October 2023</v-card-subtitle>
                        </v-card-item>

                        <v-card-text>
                            <v-table>
                                <thead>
                                    <tr>
                                        <th class="text-center">Zip Code</th>
                                        <th class="text-center">Average Days</th>
                                        <th class="text-center">12-Month Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="place in days" :key="place.zip">
                                        <td>{{ place.zip }}</td>
                                        <td>
                                            <AnimatedValue :value="place.days" format="plain" />
                                        </td>
                                        <td :style="`color: ${place.diff < 0 ? '#fa0542' : '#39FF14'}`">
                                            <v-icon :color="place.diff < 0 ? '#fa0542' : '#39FF14'"
                                                :icon="place.diff < 0 ? 'mdi-arrow-down' : 'mdi-arrow-up'">
                                            </v-icon>
                                            {{ place.diff.toFixed(2) }}%
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-card-item>
                            <v-card-title>Average Sale to List Ratio</v-card-title>
                            <v-card-subtitle>October 2023</v-card-subtitle>
                        </v-card-item>

                        <v-card-text>
                            <v-table>
                                <thead>
                                    <tr>
                                        <th class="text-center">Zip Code</th>
                                        <th class="text-center">Sale to List</th>
                                        <th class="text-center">12-Month Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="place in sales_list" :key="place.zip">
                                        <td>{{ place.zip }}</td>
                                        <td>
                                            <AnimatedValue :value="place.sales_list" format="percent" />
                                        </td>
                                        <td :style="`color: ${place.diff < 0 ? '#fa0542' : '#39FF14'}`">
                                            <v-icon :color="place.diff < 0 ? '#fa0542' : '#39FF14'"
                                                :icon="place.diff < 0 ? 'mdi-arrow-down' : 'mdi-arrow-up'">
                                            </v-icon>
                                            {{ place.diff.toFixed(2) }}%
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="tight-top">
                <v-col>
                    <span class="text-caption" style="align-self: flex-end; margin-top: auto;">
                        Source: <a href="https://www.redfin.com/news/data-center/" target="#">Redfin</a>
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
                Source: <a href="https://www.redfin.com/news/data-center/" target="#">Redfin</a>
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
        sold: [
            { zip: 98329, sold: 40, diff: -25.92592592592593 },
            { zip: 98332, sold: 66, diff: -48.03149606299213 },
            { zip: 98333, sold: 15, diff: -21.052631578947366 },
            { zip: 98335, sold: 100, diff: -8.25688073394495 }
        ],
        days: [
            { zip: 98329, days: 14, diff: -30.000000000000004 },
            { zip: 98332, days: 30, diff: -3.2258064516129004 },
            { zip: 98333, days: 13, diff: -31.57894736842105 },
            { zip: 98335, days: 15, diff: -21.052631578947366 }
        ],
        sales_list: [
            { zip: 98329, sales_list: 99.1, diff: -0.20140986908359082 },
            { zip: 98332, sales_list: 99.3, diff: 1.2232415902140747 },
            { zip: 98333, sales_list: 100.6, diff: 2.6530612244897833 },
            { zip: 98335, sales_list: 99.7, diff: 0.504032258064524 }
        ],
        series: [
            {
                name: "98335",
                data: [
                    157, 139, 144, 120, 106, 88, 121, 144, 167, 171, 168, 153, 153, 138, 151,
                    114, 96, 74, 98, 125, 138, 140, 143, 128, 109, 86, 72, 62, 55, 61, 80, 96,
                    105, 103, 104, 106, 100
                ]
            },
            {
                name: "98333",
                data: [
                    27, 29, 24, 20, 16, 11, 11, 16, 23, 27, 24, 22, 23, 25, 24, 20, 12, 9, 13, 23,
                    26, 26, 22, 23, 19, 16, 11, 9, 11, 12, 11, 8, 9, 11, 16, 16, 15
                ]
            },
            {
                name: "98332",
                data: [
                    165, 142, 130, 106, 97, 95, 121, 137, 144, 138, 142, 138, 136, 124, 117, 84,
                    71, 72, 99, 116, 129, 133, 134, 128, 127, 115, 89, 62, 52, 69, 85, 106, 119,
                    107, 94, 74, 66
                ]
            },
            {
                name: "98329",
                data: [
                    86, 78, 62, 52, 41, 36, 44, 59, 69, 72, 76, 75, 70, 64, 58, 53, 51, 55, 55, 58,
                    71, 78, 79, 60, 54, 44, 33, 28, 26, 30, 24, 28, 27, 39, 40, 50, 40
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
                text: "Homes Sold - Gig Harbor & Fox Island",
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
                    text: "Sold",
                    style: {
                        color: "lightgrey", // Y-axis title color
                    },
                },
                labels: {
                    style: {
                        colors: "lightgrey", // Y-axis label color
                    },
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
        if (to.name !== 'Median') {
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