<template>
    <p v-if="errorMessage"> {{errorMessage}} </p>
    <main v-if="!loading"> 
      <Recipes :recipes="recipes"/>
    </main>
    <main v-else class="flex justify-center">
      <img :src="loadingImage" />
    </main>
</template>

<script>
  import Recipes from '../components/Recipes.vue';
  export default {
    name: "Home",
    components: {
      Recipes
    },
    data () {
      return {
        recipes: [],
        loading: true,
        loadingImage: require('../assets/loading.gif'),
        errorMessage: ''
      }
    },
    methods: {
      async fetchRecipes() {
        const res =  await fetch('api/recipes');
        if(res.ok) { 
          const data = await res.json();
          return data;
        } else {
            this.errorMessage = "Something went wrong with the server";
        }  
      }      
    },
    async created() {
       this.recipes = await this.fetchRecipes();
       this.recipes.length === 0 ? (this.errorMessage = 'There are no recipes to show, please add one') : this.recipes;
       this.loading = false;
    }
  }
</script>
