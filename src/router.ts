import { createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"
import CardDetail from "./views/CardDetail.vue"

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/card_detail',
        component: CardDetail
    },
    {
        path: '/card_detail/:id',
        component: CardDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router