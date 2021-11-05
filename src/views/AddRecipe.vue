<template>
    <RecipeForm />
</template>

<script>
    import RecipeForm from '../components/RecipeForm.vue'
    export default {
        name: "AddRecipe",
        components: {
            RecipeForm
        },
        mounted () {
            window.scrollTo(0, 0)
        }
    };
</script>