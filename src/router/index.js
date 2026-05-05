import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },

  {
    path: '/products',
    component: () => import('@/views/ProductsLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/ProductsList.vue')
      },
      {
        path: ':id',
        name: 'ProductDetail',
        component: () => import('@/views/ProductDetail.vue'),
        props: true
      }
    ]
  },

  {
    path: '/cart',
    component: () => import('@/views/Cart.vue')
  },

  {
    path: '/wishlist',
    component: () => import('@/views/WishList.vue')
  },

  {
    path: '/checkout',
    component: () => import('@/views/Checkout.vue'),
    meta: { requiresAuth: true }
  },

  // 🎉 SUCCESS PAGE (ADDED HERE)
  {
    path: '/success',
    component: () => import('@/views/Success.vue')
  },

  {
    path: '/profile',
    component: () => import('@/views/Profile.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },

  {
    path: '/register',
    component: () => import('@/views/Register.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 AUTH GUARD
router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return '/login'
  }
})

export default router