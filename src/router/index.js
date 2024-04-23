import CartView from '../views/CartView.vue'
import ContactView from '../views/ContactView.vue'
import ShopView from '../views/ShopView.vue'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import DefaultView from '../views/DefaultView.vue'
import { authGuard } from './authGuard'
import { adminGuard } from './adminGuard'
import { createRouter, createWebHistory } from 'vue-router'
import AdminContactView from '@/views/AdminContactView.vue'
import AdminUserView from '@/views/AdminUserView.vue'
import AdminProductView from '@/views/AdminProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }
    return {
      top: 0,
      behavior: 'smooth'
    }
  },
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultView,
      children:[
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView
        },
        {
          path: 'shop',
          name: 'shop',
          component: ShopView
        },
        {
          path: 'cart',
          name: 'cart',
          component: CartView,
          meta: { requiresAuth: true }
        },
      ]
    },
    
    {
      path: '/admin',
      name: 'admin',
      redirect: {name: 'products'},
      component: AdminView,
      meta: { requiresAdmin: true },
      children:[
      {
        path: 'products',
        name: 'products',
        component: AdminProductView
      },
      {
        path: 'contact-settings',
        name: 'contact-settings',
        component: AdminContactView
      },
      {
        path: 'users',
        name: 'users',
        component: AdminUserView
      }
    ]
    }
  ]
})

  router.beforeEach(async(to, from) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let canAccess = await authGuard(to, from)
    if(!canAccess) return {name : 'shop'}
  } 
  else if (to.matched.some((record) => record.meta.requiresAdmin)) {
    const canAccess = await adminGuard(to, from)
    if(!canAccess) return {name : 'home'}
  } 
})


export default router