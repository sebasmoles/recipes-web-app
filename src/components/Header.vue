<template>
    <header class="bg-white sticky top-0 border-b border-gray-300 py-4">
        <div class="flex justify-between items-center mx-auto max-w-3xl lg:max-w-xl sm:max-w-xs xs:px-4">
            <div @click="toHomePage" class="cursor-pointer">
                <h1 class="text-4xl sm:text-3xl ">Recipes</h1>
                <span class="sm:text-sm">The best recipe website</span> 
            </div>
            
            <button v-show="!isHidden" @click="toAddRecipe" class="bg-blue-600 text-white rounded p-4 hover:bg-blue-500 text-xl lg:p-3 sm:p-2">Add recipe</button>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                isHidden: false
            }
        },
        methods: {
            toAddRecipe () {
                this.$router.push('/add-recipe');
            },
            toHomePage () {
                this.$router.push('/');
            }
        },
        watch: {
            $route: function() {
                // Check if given route is true, if it is then hide nav button 
                if (this.$route.path === "/add-recipe") {
                    this.isHidden = true;
                    } else  {
                    this.isHidden = false;
                }
            }
        }        
    }
</script>
