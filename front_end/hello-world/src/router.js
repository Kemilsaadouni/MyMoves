import {createRouter, createWebHistory } from "vue-router";
import register from "@/vue/Register";
import login from "@/vue/Login";
import home from "@/vue/Home";

const routes = [
    {
        path: '/',
        name:'home',
        component: home
    },
    {
        path:'/register',
        name:'register',
        component: register
    },
    {
        path:'/login',
        name:'login',
        component: login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router