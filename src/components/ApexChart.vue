<template>
    <vue-apexchart :options="chartOptions" :series="series" type="line" :height="$vuetify.display.xlAndUp ? 600 : 300" />
</template>
  
<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
    components: {
        VueApexchart: VueApexCharts,
    },

    props: {
        series: Array,
        chartOptions: Object
    }
};
</script>