<template>
    <div class="mt-10">
        <form action="">
            <div class="mb-4">
              <label class="block text-lg" for="title">Title</label>
              <input class="block shadow border rounded mt-4 p-2 w-full" type="text" id="title" name="title" autocomplete="off">
            </div>

            <div class="mb-4">
              <label class="block text-lg" for="description">Description</label>
              <input class="block shadow border rounded mt-4 p-2 w-full" type="text" id="description" name="description" autocomplete="off">
            </div>

            <div class="mb-4">
              <label class="block text-lg" for="">Ingredients</label>
              <input class="block shadow border rounded mt-4 p-2" type="text" name="" id="">
            </div>

            <div class="mb-4">
              <label class="block text-lg" for="">Instructions</label>
              <input class="block shadow border rounded mt-4 p-2" type="text" name="" id="">
            </div>

            <div class="mb-4">
              <label class="block text-lg" for="">Notes</label>
              <input class="block shadow border rounded mt-4 p-2" type="text" name="" id="">
            </div>

            <div class="mb-4">
              <label class="block text-lg" for="">Image</label>
              <input class="block mt-4" type="file" accept="image/*" id="image" name="image">
            </div>
              
            <button class="bg-blue-600 p-4 my-4 rounded text-white hover:bg-blue-500 text-2xl lg:text-xl lg:p-3 sm:p-2 xs:text-base">add recipe</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "RecipeForm"
  };
</script>