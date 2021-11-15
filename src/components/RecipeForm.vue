<template>
    <div class="mt-10">
        <form action="">
            <div class="mb-4">
              <label class="block text-lg" for="title">Recipe title:</label>
              <input class="block shadow border rounded mt-4 p-2 w-full focus:bg-yellow-100" type="text" id="title" name="title" autocomplete="off">
            </div>

            <div class="mb-4">
              <label class="block text-lg" for="description">Description:</label>
              <input class="block shadow border rounded mt-4 p-2 w-full focus:bg-yellow-100" type="text" id="description" name="description" autocomplete="off">
            </div>

            <div class="mb-16">
              <label class="block text-lg" for="image">Image:</label>
              <input class="block w-64 mt-4 text-gray-400" type="file" accept="image/*" id="image" name="image">
            </div>

            <div class="mb-4">
              <label class="block text-lg">Ingredients:</label>
              <label class="block text-gray-400">e.g. 1/2 cup of white rice</label>
              <input class="block shadow border rounded mt-4 p-2 w-6/12 focus:bg-yellow-100" type="text">
            </div>

            <div class="mb-4">
              <label class="block text-lg">Instructions:</label>
              <label class="block text-gray-400">e.g. Add rice to a big bowl</label>
              <input class="block shadow border rounded mt-4 p-2 w-full focus:bg-yellow-100" type="text">
            </div>

            <div class="mb-4">
              <label class="block text-lg">Notes: (Optional)</label>
              <label class="block text-gray-400">e.g. After cooked, you can store the rice in the fridge</label>
              <input class="block shadow border rounded mt-4 p-2 w-full focus:bg-yellow-100" type="text">
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

<style scoped>
  ::file-selector-button {
    background: white;
    border: 1px solid rgba(229, 231, 235);
    outline: none;
    cursor: pointer;
    border-radius: 0.25rem;
    padding: 0.50rem 1rem;
    margin-right: 1rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  ::file-selector-button:hover {
    background: #ebebeb ;
  }
</style>