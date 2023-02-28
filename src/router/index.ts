import { createRouter,createWebHashHistory } from "vue-router";


const routes = [
    {
        path:'/',
        name:'login_pages',
        component:()=>import('../pages/loginPages.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router