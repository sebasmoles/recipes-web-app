import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddRecipe from "../views/AddRecipe.vue";
import ViewRecipe from "../views/ViewRecipe.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-recipe",
    name: "AddRecipe",
    component: AddRecipe
  },
  {
    path: "/recipe",
    name: "ViewRecipe",
    component: ViewRecipe
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
