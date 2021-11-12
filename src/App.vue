<template>
  <Header />
  <div class="mx-auto max-w-3xl lg:max-w-xl sm:max-w-xs xs:px-4">
    <router-view />
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    components: {
      Header
    }
  }
</script>

<style>
</style>
