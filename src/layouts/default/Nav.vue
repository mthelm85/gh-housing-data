<template>
  <v-layout class="overflow-visible" style="height: 56px;">

    <v-bottom-navigation :class="pulsateClass" v-model="value" :bg-color="color" active grow key="bottom-navigation"
      inline>
      <v-btn class="dj-button" v-for="page in pages" :key="page.id" :to="page.route">
        <v-icon>{{ page.icon }}</v-icon>
        <span>{{ page.title }}</span>
      </v-btn>
    </v-bottom-navigation>

  </v-layout>
</template>

<script>
export default {
  data: () => ({
    value: 1,
    color: '#0FF0FC',
    pulsateClass: '',
    pages: [
      { id: 1, title: 'Start', route: '/', icon: 'mdi-home' },
      { id: 2, title: 'Overview', route: '/overview', icon: 'mdi-text-box-outline' },
      { id: 3, title: 'Supply', route: '/supply', icon: 'mdi-home-group-plus' },
      { id: 4, title: 'Demand', route: '/demand', icon: 'mdi-home-group-minus' },
      { id: 5, title: 'Zip Code Map', route: '/zip-map', icon: 'mdi-map' },
      // { id: 6, title: '2 Bed', route: '/2-bed' },
      // { id: 7, title: '3 Bed', route: '/3-bed' },
      // { id: 8, title: '4+ Bed', route: '/4-bed' },
      // { id: 9, title: 'Condo', route: '/condo' },
      // { id: 10, title: 'Single Family', route: '/single-family' },
      // { id: 11, title: 'Manufactured', route: '/manufactured' },
    ]
  }),
  created() {
    this.checkRoute()
  },

  methods: {
    checkRoute() {
      this.pulsateClass = this.$route.path === '/' ? 'pulsate' : 'static'
    }
  },

  watch: {
    '$route.path'() {
      console.log(this.$route.path)
      this.pulsateClass = this.$route.path === '/' ? 'pulsate' : 'static'
    }
  }
}
</script>

<style scoped>
@keyframes pulsate {
  0% {
    background-color: #0FF0FC;
    box-shadow: 0 0 15px #0FF0FC;
  }

  50% {
    background-color: #06666b;
    box-shadow: 0 0 5px #06666b;
  }

  100% {
    background-color: #0FF0FC;
    box-shadow: 0 0 15px #0FF0FC;
  }
}

.pulsate {
  animation: pulsate 2.4s infinite;
  transition: background-color 0.8s;
}

.static {
  box-shadow: 0 0 10px #0FF0FC;
}
</style>