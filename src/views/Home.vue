<template>
    <Recipes />
</template>

<script>
  import Recipes from '../components/Recipes.vue';
  export default {
    name: "Home",
    components: {
      Recipes
    },
    methods: {
      async fetchRecipes() {
        const res =  await fetch('api/recipes');
        if(res.ok) { 
          const data = await res.json();
          console.log(data);
          // return data;
        }   
      }      
    },
    async created() {
       await this.fetchRecipes();
      // this.tasks.length === 0 ? (this.errorMessage = 'There are no tasks to show, please add one') : this.tasks;
    }
  }
</script>
