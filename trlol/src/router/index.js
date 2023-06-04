import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import StartPage from "../views/StartPage.vue";
import QuestionPage from "../views/QuestionPage.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
  },
  {
    path: "/start",
    name: "Start",
    component: StartPage,
  },
  {
    path: "/question",
    name: "QuestionPage",
    component: QuestionPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router




// export default createRouter({
//     history: createWebHistory(),
//     routes,
// })
