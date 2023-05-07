import { createRouter, createWebHistory } from "vue-router";
import MainPage from '../views/MainPage.vue'
import StartPage from '../views/StartPage.vue'
import QuestionPage from '../views/QuestionPage.vue'

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/test',
        component: StartPage,
    },
    {
        path: '/question',
        component: QuestionPage,
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})