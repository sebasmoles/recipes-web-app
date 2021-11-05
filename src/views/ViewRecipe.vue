<template>
    <Recipe />
</template>

<script>
  import Recipe from '../components/Recipe.vue';
  export default {
      name: "ViewRecipe",
      components: {
        Recipe
      },
      mounted () {
        window.scrollTo(0, 0)
      }
  };
</script>