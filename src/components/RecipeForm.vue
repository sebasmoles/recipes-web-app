<template>
    <div class="mt-10">
        <form @submit="onSubmit">
            <div class="mb-4">
              <label class="block text-lg" for="author">Author:</label>
              <input class="block shadow border rounded mt-4 p-2 w-full focus:bg-yellow-100" type="text" v-model="author" id="author" name="author" autocomplete="off" required>
            </div>

            <div class="mb-4">
              <label class="block text-lg" for="title">Recipe title:</label>
              <input class="block shadow border rounded mt-4 p-2 w-full focus:bg-yellow-100" type="text" v-model="title" id="title" name="title" autocomplete="off" required>
            </div>

            <div class="mb-4">
              <label class="block text-lg" for="description">Description:</label>
              <input class="block shadow border rounded mt-4 p-2 w-full focus:bg-yellow-100" type="text" v-model="description" id="description" name="description" autocomplete="off" required>
            </div>

            <div class="mb-16">
              <label class="block text-lg" for="image">Image:</label>
              <input @change="inputValidation" class="w-60 mt-4 text-gray-400" type="file" accept="image/*" id="image" name="image" required ref="image"><i v-if="isValid" class="fas fa-check-circle text-green-500"></i>
            </div>

            <div class="mb-4">
              <label class="block text-lg">Ingredients:</label>
              <label class="block text-gray-400">e.g. 1/2 cup of white rice</label>
              <div v-for="(ingredient, index) in ingredients" :key="index">
                 <input v-model="ingredients[index]" class="shadow border rounded mt-4 mr-4 p-2 w-6/12 focus:bg-yellow-100" type="text" required><button v-if="index > 0" @click="deleteIngredient(index)" type="button"><i class="fas fa-minus-circle text-red-500"></i></button>
              </div>
              <button @click="addIngredient" class="mt-4 underline text-blue-500" type="button"><i class="fas fa-plus-circle text-blue-800"></i> Add ingredient</button>
            </div>

            <div class="mb-4">
              <label class="block text-lg">Instructions:</label>
              <label class="block text-gray-400">e.g. Add rice to a big bowl</label>
              <div v-for="(instruction, index) in instructions" :key="index"> 
                <input v-model="instructions[index]" class="shadow border rounded mt-4 mr-4 p-2 w-9/12 focus:bg-yellow-100" type="text" required><button v-if="index > 0" @click="deleteInstruction(index)" type="button"><i class="fas fa-minus-circle text-red-500"></i></button>
              </div>
              <button @click="addInstruction" class="mt-4 underline text-blue-500" type="button"><i class="fas fa-plus-circle text-blue-800"></i> Add instruction</button>
            </div>

            <div class="mb-4">
              <label class="block text-lg">Notes:</label>
              <label class="block text-gray-400">e.g. After cooked, you can store the rice in the fridge</label>
              <div v-for="(note, index) in notes" :key="index">
                <input v-model="notes[index]" class="shadow border rounded mt-4 mr-4 p-2 w-9/12 focus:bg-yellow-100" type="text" required><button v-if="index > 0" @click="deleteNote(index)" type="button"><i class="fas fa-minus-circle text-red-500"></i></button>
              </div>
               <button @click="addNote" class="mt-4 underline text-blue-500" type="button"><i class="fas fa-plus-circle text-blue-800"></i> Add note</button>
            </div>
  
            <button class="bg-blue-600 p-4 mt-4 mb-12 rounded text-white hover:bg-blue-500 text-2xl lg:text-xl lg:p-3 sm:p-2 xs:text-base" type="submit">Add recipe</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "RecipeForm",
    data() {
      return {
        author: '',
        title: '',
        description: '',
        ingredients: [''],
        instructions: [''],
        notes: [''],
        isValid: false
      }
    },
    methods: {
      addIngredient() {
        let oneIsEmpty = this.ingredients.includes('');
        
        if(oneIsEmpty) {
          alert('Please type an ingredient. No empty spaces allowed');
        } else {
          this.ingredients.push('');
        }
      },
      deleteIngredient(index) {
        this.ingredients.splice(index, 1);
      },
      addInstruction() {
        let oneIsEmpty = this.instructions.includes('');

        if(oneIsEmpty) {
          alert('Please type an instruction. No empty spaces allowed');
        } else {
          this.instructions.push('');
        }
      },
      deleteInstruction(index) {
        this.instructions.splice(index, 1);
      },
      addNote() {
        let oneIsEmpty = this.notes.includes('');

        if(oneIsEmpty) {
          alert('Please type a note. No empty spaces allowed');
        } else {
          this.notes.push('');
        }
      },
      deleteNote(index) {
        this.notes.splice(index, 1);
      },
      inputValidation() {
        let validation = this.$refs.image.checkValidity();

        if(validation) {
          this.isValid = true;
        } else {
          this.isValid = false;
        }
      },
      async onSubmit(e) {
        e.preventDefault();
        
        const newRecipe = {
          author: this.author,
          title: this.title,
          description: this.description,
          ingredients: this.ingredients,
          instructions: this.instructions,
          notes: this.notes
        }

        const res = await fetch('api/recipes',  {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        });
        if (res.ok) {
            alert('Recipe added successfully');
        } else {
            alert('Error adding recipe');
        }        
      }
    }
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