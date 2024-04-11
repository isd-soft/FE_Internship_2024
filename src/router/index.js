import CartView from '../views/CartView.vue'
import ContactView from '../views/ContactView.vue'
import ShopView from '../views/ShopView.vue'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import { authGuard } from './authGuard'
import { adminGuard } from './adminGuard'
import { createRouter, createWebHistory } from 'vue-router'
import BannerSection from '@/components/shared/BannerSection.vue'
import StarRating from '@/components/shared/StarRating.vue'
import ProductCard from '@/components/shared/ProductCard.vue'

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
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      // meta: { requiresAdmin: true },
      children:[
      {
        path: 'products',
        name: 'products',
        component: BannerSection //add component when it will appear
      },
      {
        path: 'contact-settings',
        name: 'contact-settings',
        component: StarRating //add component when it will appear
      },
      {
        path: 'users',
        name: 'users',
        component: ProductCard //add component when it will appear
      }
    ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    authGuard(to, from, next)
  } else {
    next()
  }
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    adminGuard(to, from, next)
  } else {
    next()
  }
})

export default router