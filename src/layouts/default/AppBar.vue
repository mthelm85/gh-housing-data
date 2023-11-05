<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <span class="font-weight-thin box">HELM</span> <span style="color: #0FF0FC;">ANALYTICS</span>
    </v-app-bar-title>
    <v-dialog
        transition="dialog-bottom-transition"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon>
      <v-icon color="#0FF0FC">mdi-information-outline</v-icon>
    </v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              title="About This Page"
              class="text-center"
            ></v-toolbar>
            
            <v-card-text>
              <div class="pa-12">
                This page is developed and maintained by Matt Helm of Gig Harbor
                <a href="https://www.matthelm.pro" target="_blank">www.matthelm.pro</a>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                variant="text"
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  // data() {
  //   return {
  //     show: false,
  //   };
  // },
};
</script>

<style scoped>
.box {
  border: 1px solid #0FF0FC;
  padding: 1px 3px 1px 3px;
  color: #0FF0FC;
}
</style>
