import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Me from '../views/Me.vue'
import Order from '../views/Order.vue'
import Address from '../views/Address.vue'
import City from '../views/City.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    // name: 'index',
    component: Index,
    children:[
      {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        name:'home',
        component:Home
      },
      {
        path:'/me',
        name:'me',
        component:Me
      },
      {
        path:'/order',
        name:'order',
        component:Order
      },
      {
        path:'/address',
        name:'address',
        component:Address
      },
      {
        path:'/city',
        name:'city',
        component:City
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//路由守卫
router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.ele_login ? true:false;
  if(to.path == '/login'){
    next();
  }else{
    isLogin?next():next('/login')
  }
})

export default router
