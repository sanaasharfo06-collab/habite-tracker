import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HabiteView from '@/views/HabiteView.vue'
import StateView from '@/views/StateView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/habites',
    name:'habites',
    component:HabiteView,

  },
  {
    path:'/states',
    name:'states',
    component:StateView,

  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
