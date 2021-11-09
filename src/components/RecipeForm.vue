<template>
    <div class="mt-10">
        <form action="">
            <label class="text-lg" for="title">Title</label><br>
            <input class="shadow border rounded my-3" type="text" id="title" name="title"><br>
            
            <label class="text-lg" for="description">Description</label><br>
            <input class="shadow border rounded my-3" type="text" id="description" name="description"><br>

            <label class="text-lg" for="">Ingredients</label><br>
            <input class="shadow border rounded my-3" type="text" name="" id=""><br>

            <label class="text-lg" for="">Instructions</label><br>
            <input class="shadow border rounded my-3" type="text" name="" id=""><br>

            <label class="text-lg" for="">Notes</label><br>
            <input class="shadow border rounded my-3" type="text" name="" id=""><br>

            <label class="text-lg" for="">Image</label><br>

            <button class="bg-blue-600 p-4 rounded text-white hover:bg-blue-500 text-2xl lg:text-xl lg:p-3 sm:p-2 xs:text-base">add recipe</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "RecipeForm"
  };
</script>