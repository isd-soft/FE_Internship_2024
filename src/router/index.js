import CartView from '../views/CartView.vue'
import ContactView from '../views/ContactView.vue'
import ShopView from '../views/ShopView.vue'
import HomeView from '../views/HomeView.vue'
import { authGuard } from './authGuard'
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
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      // meta: { requiresAuth: true } //Comment this if u need to access cart
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    authGuard(to, from, next)
  } else {
    next()
  }
})

export default router
