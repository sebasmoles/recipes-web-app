<template>

        <p v-if="errorMessage" class="text-xl mt-10"> {{errorMessage}} </p>

        <main v-if="!loading"> 
            <div class="flex justify-between flex-wrap mt-10">
                <!-- Cardbox -->
                <div v-for="(recipe, index) in recipes" :key="index" class="flex flex-col flex-auto max-w-xs mb-10 shadow-lg rounded lg:max-w-2xs sm:max-w-full overflow-hidden">
                    <img class="rounded-t object-cover h-picture" :src="recipe.image" alt="Recipe Image">
                    <div class="p-6 sm:flex sm:items-center sm:flex-col">
                        <h3 class="font-bold text-xl mb-4 sm:text-center truncate w-60"> {{recipe.title}} </h3>
                        <p class="mb-5 sm:text-center h-xs ellipsis"> {{recipe.description}} </p>
                        <button @click="$router.push({ path: `/recipe/${recipe.id}` })" class="rounded p-2 border-blue-600 border-2 font-semibold hover:bg-blue-600 hover:text-white">View this recipe</button>
                    </div>
                </div>
                <!-- End Cardbox -->
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

<style scoped>
    .ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box !important;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
    }
</style>