import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProductsTable from "@/components/Products/ProductsTable/ProductsTable.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'Products/ProductsTable',
      component: ProductsTable,
      redirect: '/Products/ProductsTable/ProductsTable.vue',
      children: [
        {
          path: '/edit',
          name: 'edit',
          component: () => import( './components/Products/ProductsTable/ProductsTable.vue')
        }
      ]
    }
  ]
})
