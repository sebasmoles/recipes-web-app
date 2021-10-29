<template>
    <header class="flex justify-between items-center mt-10">
        <div @click="$router.push('/')" class="cursor-pointer">
            <h1 class="text-6xl lg:text-5xl sm:text-4xl 2xs:text-3xl">recipes</h1>
            <span class="text-xl lg:text-base">the best recipe website</span> 
        </div>
        
        <button @click="$router.push('add-recipe')" class="bg-gray-700 text-white rounded p-4 hover:bg-gray-600 text-3xl lg:text-xl lg:p-3 sm:p-2 2xs:text-base">add recipe</button>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
