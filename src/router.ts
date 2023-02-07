import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import AddCard from "@/views/AddCard.vue"
import CreateAccount from "@/views/CreateAccount.vue"
import CardDetail from "@/views/CardDetail.vue"
import Send from '@/views/Send.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/add_card',
        component: AddCard
    },
    {
        path: '/create_account/:id',
        component: CreateAccount
    },
    {
        path: '/card_detail/:id',
        component: CardDetail
    },
    {
        path: '/send',
        component: Send
    }
]

const router = createRouter({
    linkActiveClass: "active",
    history: createWebHistory(),
    routes
})

export default router