import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Products from '../pages/en'

export default new VueRouter({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/en',
        name: 'En',
        component: Products
    }
    ]
})