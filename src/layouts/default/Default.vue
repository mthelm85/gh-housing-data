<template>
  <v-app>
    <default-bar />

    <default-view />

    <bottom-nav />
  </v-app>
</template>

<script>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import BottomNav from './Nav.vue'

  export default {
    components: {
      DefaultBar,
      DefaultView,
      BottomNav
    }
  }
</script>