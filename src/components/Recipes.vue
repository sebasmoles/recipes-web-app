<template>
    <div class="flex justify-between flex-wrap mt-20">
        <div v-for="test in tests" :key="test" class="flex flex-col h-90 max-w-xs mb-6 shadow-lg rounded cursor-pointer flex-auto">
            <img class="rounded-t object-cover" src="../assets/test-image.jpeg" alt="whatever">
            <div class="p-6">
                <h3 class="font-bold text-2xl mb-2">Recipe example</h3>
                <p class="mb-2">Description of the recipe, increidble recipe and awsome description, yes f cpure i odnt mid yes I was going to yes</p>
                <button class="rounded p-2 border-blue-600 border-2 font-semibold">View this recipe</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Recipes',
        data () {
            return {
                tests: [
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            }
        }
    }
</script>