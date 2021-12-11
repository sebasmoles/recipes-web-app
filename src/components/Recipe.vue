<template>
    <div class="mt-10 overflow-hidden">

        <p v-if="errorMessage" class="text-xl mt-10"> {{errorMessage}} </p>

        <main v-if="!loading">
            <div class="mb-10">
                <h1 class="text-3xl sm:text-2xl mb-5 font-medium"> {{ recipe.title }} </h1>
                <h2 class="text-xl sm:text-base mb-5 text-gray-500">By {{ recipe.author }} </h2>
                <img class="mb-10 max-w-full rounded" src="../assets/test-image.jpeg" alt="Recipe Image">
                <p class="text-xl sm:text-base" style="line-height: 2"> {{ recipe.description }} </p>            
            </div>

            <div class="mb-10">
                <h3 class="text-2xl sm:text-xl mb-7 font-medium border-b border-gray-300 pb-3">Ingredients</h3>
                <ul class="text-xl sm:text-base list-disc list-inside">
                    <li v-for="(ingredient, index) in recipe.ingredients" :key="index" class="mb-5 leading-loose"> {{ ingredient }} </li>
                </ul>
            </div>
            
            <div class="mb-10">
                <h3 class="text-2xl sm:text-xl mb-7 font-medium border-b border-gray-300 pb-3">Instructions</h3>
                <ol class="text-xl sm:text-base list-decimal list-inside">
                    <li v-for="(instruction, index) in recipe.instructions" :key="index" class="mb-10 leading-loose"> {{ instruction }} </li>
                </ol>
            </div>
            
            <div class="mb-10">
                <h3 class="text-2xl sm:text-xl mb-7 font-medium border-b border-gray-300 pb-3">Notes</h3>
                <ul class="text-xl sm:text-base list-disc list-inside">
                    <li v-for="(note, index) in recipe.notes" :key="index" class="mb-10 leading-loose"> {{ note }} </li>
                </ul>
            </div>
        </main>
        <main v-else class="flex justify-center mt-10">
            <img :src="loadingImage" />
        </main>        

    </div>
</template>

<script>
    export default {
        name: 'Recipe',
        data() {
            return {
                id: this.$route.params.id,
                recipe: {},
                loading: true,
                loadingImage: require('../assets/loading.gif'),
                errorMessage: ''
            }
        },
        methods: {
            async fetchRecipe(id) {
                const res =  await fetch(`/api/recipes/${id}`);

                if(res.ok) { 
                    const data = await res.json();
                    return data;
                } else {
                    this.errorMessage = "Something went wrong with the server, try again later.";
                }  
            }
        },
        async created() {
            this.recipe = await this.fetchRecipe(this.id);
            this.loading = false;
        }
    }
</script>