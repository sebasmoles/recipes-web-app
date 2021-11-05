<template>
    <div class="mt-10">
        <div class="mb-10">
            <h1 class="text-4xl mb-5 font-medium">Recipe Title</h1>
            <h2 class="text-2xl mb-5 text-gray-500">By Author</h2>
            <img class="mb-10 max-w-full rounded" src="../assets/test-image.jpeg" alt="Recipe Image">
            <p class="text-2xl">Description of the recipe</p>            
        </div>

        <div class="mb-10">
            <h3 class="text-3xl mb-7 font-medium border-b border-gray-300 pb-3">Ingredients</h3>
            <ul class="text-xl list-disc list-inside leading-loose">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
        
        <div class="mb-10">
            <h3 class="text-3xl mb-7 font-medium border-b border-gray-300 pb-3">Instructions</h3>
            <ol class="text-xl list-decimal list-inside leading-loose">
                <li>Do this and then do that</li>
                <li>Boil this and then boil that</li>
                <li>Build this and then create that</li>
            </ol>
        </div>
        
        <div class="mb-10">
             <h3 class="text-3xl mb-7 font-medium border-b border-gray-300 pb-3">Notes</h3>
             <ul class="text-xl list-disc list-inside leading-loose">
                <li>Make sure to to do this and not the other</li>
                <li>Do this with love so you can do whatever you want</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Recipe'
    }
</script>