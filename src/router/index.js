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
import AdminUserList from '@/components/admin/AdminUserList.vue'
import AdminProductList from '@/components/admin/AdminProductList.vue'

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
      redirect: {path: '/home'},
      component: DefaultView,
      // meta: { requiresAdmin: true },
      children:[
        {
          path: 'home',
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
          meta: { requiresAuth: true } //Comment this if u need to access cart
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
        component: AdminProductList
      },
      {
        path: 'contact-settings',
        name: 'contact-settings',
        component: AdminContactView //add component when it will appear
      },
      {
        path: 'users',
        name: 'users',
        component: AdminUserList
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