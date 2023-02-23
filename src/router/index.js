import { createWebHistory, createRouter } from "vue-router";
import Main from "@/pages/MainPage.vue";
import TodoPage from "@/pages/TodoPage.vue";

const routes = [
      {
            path: "/",
            component: Main,
      },
      {
            path: "/todo",
            component: TodoPage,
      },
];

const router = createRouter({
      routes,
      history: createWebHistory(process.env.BASE_URL),
});

export default router;
