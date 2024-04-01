import CartView from '@/views/CartView.vue'
import ContactView from '@/views/ContactView.vue'
import ShopView from '@/views/ShopView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path:'/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }

    
  ]
})

export default router
