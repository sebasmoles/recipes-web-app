<template>

        <p v-if="errorMessage" class="text-xl mt-10"> {{errorMessage}} </p>

        <main v-if="!loading"> 
            <div class="flex justify-between flex-wrap mt-10 sm:justify-center">    
                <div v-for="(recipe, index) in recipes" :key="index" class="flex flex-col h-xl lg:h-lg sm:h-xl xs:h-lg max-w-xs mb-10 shadow-lg rounded flex-auto lg:max-w-2xs sm:max-w-full">
                    <img class="rounded-t object-cover" src="../assets/test-image.jpeg" alt="whatever">
                    <div class="p-6 sm:flex sm:justify-center sm:items-center sm:flex-col">
                        <h3 class="font-bold text-2xl mb-4"> {{recipe.title}} </h3>
                        <p class="mb-5 text-lg sm:text-center h-sm"> {{recipe.description}} </p>
                        <button @click="$router.push({ path: `/recipe/${recipe.id}` })" class="rounded p-2 text-lg border-blue-600 border-2 font-semibold hover:bg-blue-600 hover:text-white">View this recipe</button>
                    </div>
                </div>
            </div>
        </main>
        <main v-else class="flex justify-center mt-10">
            <img :src="loadingImage" />
        </main>  

    
</template>

<script>
    export default {
        name: 'Recipes',
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
                    this.errorMessage = "Something went wrong with the server, try again later.";
                    this.loading = false;
                }  
            }      
        },
        async created() {
            this.recipes = await this.fetchRecipes();
            this.recipes = this.recipes.reverse();
            this.recipes.length === 0 ? (this.errorMessage = 'There are no recipes to show, please add one.') : this.recipes;
            this.loading = false;
        }        
    }
</script>