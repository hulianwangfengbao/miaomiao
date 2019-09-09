import Vue from 'vue'
import Router from 'vue-router'
import moviesRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
         moviesRouter,
         cinemaRouter,                            //主路由
         mineRouter,
         {
           path :'/*',
           redirect : '/movie'                //重定向回到首页
         }                             
  ]
})
