<template>
    <header class="flex justify-between items-center mt-10">
        <div @click="toHomePage" class="cursor-pointer">
            <h1 class="text-6xl lg:text-5xl sm:text-4xl">recipes</h1>
            <span class="text-xl lg:text-base">the best recipe website</span> 
        </div>
        
        <button v-show="!isHidden" @click="toAddRecipe" class="bg-blue-600 text-white rounded p-4 hover:bg-blue-500 text-2xl lg:text-xl lg:p-3 sm:p-2 xs:text-base">add recipe</button>
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
                this.$router.push('add-recipe');
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
