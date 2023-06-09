import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('../views/Home.vue')
    },
    {
      path: "/admin",
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/admin.vue')
    },
    {
      path: "/form",
      name: 'form',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/productForm.vue')
    },
    {
      path: "/selectProduct",
      name: "selectProduct",
      component: () => import('../views/SelectProduct.vue')
    },
    {
      path: "/promotion",
      name: "promotion",
      component: () => import('../views/Promotion.vue')
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import('../views/Cart.vue')
    },
    {
      path: "/customerInformation",
      name: "cacustomerInformationrt",
      component: () => import('../views/CustomerInformation.vue')
    }
  ]
})

export default router
