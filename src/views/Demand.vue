<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-right fill-height">
            <v-row class="text-center">
                <v-col>
                    <v-card>
                        <v-card-item>
                            <v-card-title>Number of Homes Sold</v-card-title>
                            <v-card-subtitle>September 2023</v-card-subtitle>
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
                            <v-card-subtitle>September 2023</v-card-subtitle>
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
                            <v-card-subtitle>September 2023</v-card-subtitle>
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
                    <div style="height: 630px;"></div>
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
            { zip: 98329, sold: 50, diff: -15.254237288135597 },
            { zip: 98332, sold: 73, diff: -42.51968503937008 },
            { zip: 98333, sold: 16, diff: -30.434782608695656 },
            { zip: 98335, sold: 106, diff: -17.1875 },
        ],
        days: [
            { zip: 98329, days: 14, diff: 39.99999999999999 },
            { zip: 98332, days: 25, diff: 38.888888888888886 },
            { zip: 98333, days: 12, diff: -29.411764705882348 },
            { zip: 98335, days: 16, diff: 0.0 },
        ],
        sales_list: [
            { zip: 98329, sales_list: 99.3, diff: -0.9970089730807596 },
            { zip: 98332, sales_list: 99.1, diff: 0.2022244691607611 },
            { zip: 98333, sales_list: 99.7, diff: 1.3211382113821113 },
            { zip: 98335, sales_list: 99.5, diff: 0.1006036217303663 },
        ],
        series: [
            {
                name: "98335",
                data: [
                    46, 46, 26, 27, 28, 26, 18, 30, 30, 28, 21, 36, 37, 23, 15, 15, 11, 16, 23, 31, 37, 66, 67, 74, 74, 66, 58, 53, 44, 42, 35, 43, 63, 68, 60, 56, 61
                ]
            },
            {
                name: "98333",
                data: [
                    12, 12, 6, 4, 1, 2, 4, 4, 2, 3, 4, 6, 3, 5, 2, 2, 1, 6, 4, 6, 10, 18, 18, 13, 10, 11, 10, 9, 4, 6, 4, 7, 8, 9, 10, 9, 13
                ]
            },
            {
                name: "98332",
                data: [
                    43, 44, 25, 19, 26, 24, 17, 22, 23, 29, 31, 39, 38, 29, 21, 13, 19, 23, 32, 39, 55, 74, 92, 86, 79, 79, 61, 43, 33, 45, 46, 39, 40, 45, 42, 41, 45
                ]
            },
            {
                name: "98329",
                data: [
                    12, 13, 11, 7, 5, 8, 5, 17, 18, 12, 17, 23, 23, 20, 14, 11, 7, 5, 12, 16, 20, 29, 38, 40, 41, 33, 29, 28, 17, 14, 19, 18, 18, 28, 28, 26, 32
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