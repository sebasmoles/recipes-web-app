<template>
    <div class="flex justify-between flex-wrap mt-20 sm:justify-center">
        <div v-for="test in tests" :key="test" class="flex flex-col h-xl lg:h-lg sm:h-xl xs:h-lg max-w-xs mb-10 shadow-lg rounded flex-auto lg:max-w-2xs sm:max-w-full">
            <img class="rounded-t object-cover" src="../assets/test-image.jpeg" alt="whatever">
            <div class="p-6 sm:flex sm:justify-center sm:items-center sm:flex-col">
                <h3 class="font-bold text-2xl mb-4">Recipe example</h3>
                <p class="mb-5 text-lg sm:text-center h-sm">Description of the recipe, very delicious one nad i am happy witgh this reccipe for real </p>
                <button @click="$router.push('recipe')" class="rounded p-2 text-lg border-blue-600 border-2 font-semibold hover:bg-blue-600 hover:text-white">View this recipe</button>
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
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ]
            }
        }
    }
</script>