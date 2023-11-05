<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <div class="text-h2">Gig Harbor Housing Market</div>
          <div class="text-subtitle-1 pt-1">A Comprehensive Overview of Market Data</div>
        </v-col>
      </v-row>


      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <!-- <Map /> -->
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import Map from "@/components/Map.vue";

export default {
  components: {
    Map, // Register your custom map component
  },
};
</script>
