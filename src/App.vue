<template>
  <div class="mx-auto max-w-4xl xl:max-w-2xl lg:max-w-xl md:max-w-md sm:px-8 xs:px-4">
    <Header />
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
