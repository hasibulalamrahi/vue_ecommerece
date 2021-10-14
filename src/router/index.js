import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login'
import register from '../views/register'
import product from '../views/product'
import categories from '../views/categories'
import checkOut from '../views/checkOut'
import cart from '../views/cart'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
  {
    path: '/login',
    name: 'login',
    component:login
  },
  {
    path: '/register',
    name: 'register',
    component:register
  },
  
  {
    path: '/product/:id',
    name: 'product',
    component:product,
    props:true
  },
  
  {
    path: '/cart/checkout',
    name: 'checkout',
    component:checkOut,
    props:true
  },
  {
    path: '/cart',
    name: 'cart',
    component:cart,
    props:true
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
