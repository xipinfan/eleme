//路由跳转模块
import { createRouter, createWebHistory } from 'vue-router'
import Business from '../views/Business.vue'
import Setup from '../views/Setup.vue'
import Sign from '../views/Sign.vue'
import Reserve from '../views/components/Reserve.vue';
import Good from '../views/components/Good.vue';
import Order from '../views/components/Order.vue';
import Mine from '../views/components/Mine.vue';

const routes = [
  {
    path:'/',
    redirect: '/user/reserve'
  },
  {
    path: '/user',
    name: 'Business',
    component: Business,
    children:[
      {
        path:'reserve', 
        component: Reserve,
        name:'reserve'
      },
      {
        path:'good',
        component: Good,
        name:'good'
      },
      {
        path:'order',
        component: Order,
        name:'order'
      },
      {
        path:'mine',
        component: Mine,
        name:'mine'
      },
    ]
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
