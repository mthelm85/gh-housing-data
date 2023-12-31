<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-right fill-height">
            <v-row class="text-center">
                <v-col>
                    <v-card>
                        <v-card-item>
                            <v-card-title>Number of Homes for Sale</v-card-title>
                            <v-card-subtitle>October 2023</v-card-subtitle>
                        </v-card-item>

                        <v-card-text>
                            <v-table>
                                <thead>
                                    <tr>
                                        <th class="text-center">Zip Code</th>
                                        <th class="text-center">Inventory</th>
                                        <th class="text-center">12-Month Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="place in inventory" :key="place.zip">
                                        <td>{{ place.zip }}</td>
                                        <td><AnimatedValue :value="place.inventory" format="plain"/></td>
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
                            <v-card-title>Number of Newly Listed Homes</v-card-title>
                            <v-card-subtitle>October 2023</v-card-subtitle>
                        </v-card-item>

                        <v-card-text>
                            <v-table>
                                <thead>
                                    <tr>
                                        <th class="text-center">Zip Code</th>
                                        <th class="text-center">New Listings</th>
                                        <th class="text-center">12-Month Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="place in newListings" :key="place.zip">
                                        <td>{{ place.zip }}</td>
                                        <td><AnimatedValue :value="place.new_listings" format="plain"/></td>
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
                            <v-card-title>Months of Supply</v-card-title>
                            <v-card-subtitle>October 2023</v-card-subtitle>
                        </v-card-item>

                        <v-card-text>
                            <v-table>
                                <thead>
                                    <tr>
                                        <th class="text-center">Zip Code</th>
                                        <th class="text-center">Supply</th>
                                        <th class="text-center">12-Month Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="place in supply" :key="place.zip">
                                        <td>{{ place.zip }}</td>
                                        <td><AnimatedValue :value="place.supply" format="decimal"/></td>
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
        inventory: [
            { zip: 98329, inventory: 28, diff: -17.647058823529417 },
            { zip: 98332, inventory: 47, diff: -41.25 },
            { zip: 98333, inventory: 10, diff: -9.090909090909093 },
            { zip: 98335, inventory: 59, diff: -11.940298507462687 }
        ],
        newListings: [
            { zip: 98329, new_listings: 49, diff: -3.9215686274509776 },
            { zip: 98332, new_listings: 72, diff: -38.46153846153846 },
            { zip: 98333, new_listings: 15, diff: -6.25 },
            { zip: 98335, new_listings: 102, diff: -12.06896551724138 }
        ],
        supply: [
            { zip: 98329, supply: 0.8215158924205378, diff: 48.19502373076367 },
            { zip: 98332, supply: 0.5433526011560693, diff: -24.496628131021193 },
            { zip: 98333, supply: 0.8275862068965517, diff: 51.7241379310345 },
            { zip: 98335, supply: 0.6873786407766991, diff: 24.30952035936822 }
        ],
        series: [
            {
                name: "98335",
                data: [
                    47, 27, 28, 28, 27, 19, 31, 30, 29, 21, 36, 37, 23, 15, 15, 11, 16, 23, 31,
                    37, 66, 67, 74, 74, 67, 59, 54, 45, 43, 35, 43, 63, 68, 60, 56, 61, 59
                ]
            },
            {
                name: "98333",
                data: [
                    12, 6, 4, 1, 2, 4, 4, 3, 3, 4, 6, 3, 5, 2, 2, 1, 6, 4, 6, 10, 18, 18, 13, 10,
                    11, 10, 9, 4, 6, 4, 7, 8, 9, 10, 9, 14, 10
                ]
            },
            {
                name: "98332",
                data: [
                    45, 25, 19, 26, 24, 17, 22, 23, 29, 31, 38, 38, 29, 21, 13, 19, 23, 33, 39, 
                    55, 75, 92, 87, 80, 80, 62, 44, 33, 45, 46, 40, 41, 45, 43, 42, 45, 47
                ]
            },
            {
                name: "98329",
                data: [
                    13, 11, 7, 4, 8, 5, 17, 18, 12, 17, 23, 23, 20, 14, 11, 7, 6, 13, 16, 20, 29, 38, 40, 40, 34, 30, 29, 
                    18, 15, 20, 19, 19, 29, 29, 27, 33, 28
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
                text: "Inventory - Gig Harbor & Fox Island",
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
                    text: "Inventory",
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