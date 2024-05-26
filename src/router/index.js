import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TripView from "@/views/TripView.vue";
import AddExpense from "@/views/AddExpense.vue";
import BalanceView from "@/views/BalanceView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/trip/:id',
    name: 'trip',
    component: TripView
  },
  {
    path: '/add_expense/:id',
    name: 'add_expense',
    component: AddExpense
  },
  {
    path: '/balances/:id',
    name: 'balances',
    component: BalanceView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
