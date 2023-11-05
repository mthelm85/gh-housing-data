<template>
  <v-main>
    <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
  </v-main>
</template>

<script setup>
  //
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.5s ease all;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
