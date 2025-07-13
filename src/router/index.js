import {  createRouter, createWebHistory } from 'vue-router'

import buttonPage from '../pages/buttonPage.vue'
import inputPage from '../pages/inputPage.vue'
import carouselPage from '../pages/carouselPage.vue'
import tablePage from '../pages/tablePage.vue'

const routes = [
    { path: '/buttonPage', component: buttonPage },
    { path: '/carousel', component: carouselPage },
    { path: '/tablePage', component: tablePage },
    { path: '/inputPage', component: inputPage },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/buttonPage',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router