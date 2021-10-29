<template>
    <header class="flex justify-between items-center mt-10">
        <div @click="$router.push('/')" class="cursor-pointer">
            <h1 class="text-6xl lg:text-5xl sm:text-4xl">recipes</h1>
            <span class="text-xl lg:text-base">the best recipe website</span> 
        </div>
        
        <button @click="$router.push('add-recipe')" class="bg-blue-600 text-white rounded p-4 hover:bg-blue-500 text-2xl lg:text-xl lg:p-3 sm:p-2 2xs:text-base">add recipe</button>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
