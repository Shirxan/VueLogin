import { createRouter, createWebHistory } from 'vue-router'

import AboupageVue from '../components/Aboupage.vue'
import LoginVue from '../components/Login.vue'
import HomeVue from '../components/Home.vue'
import store from '../store/store'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/aboutpage',
      name : 'about',
      component : AboupageVue,
      beforeEnter(from,to,next){
        if(store.getters.checkGet){
          next()
        }else{
          next('/login')
          alert('Qeydiyyat olun')
        }
      }
    },
    {
path: '/login',
name : 'login',
component : LoginVue
    },
    {
      path: '/',
      name : 'home',
      component : HomeVue,
      beforeEnter(from,to,next){
        if(store.getters.checkGet){
          next()
        }else{
          next('/login')
          alert('Qeydiyyat olun')
        }
      }
      
          }
  ]
})

export default router
