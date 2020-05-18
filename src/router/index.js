// 路由管理
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from "../views/About";
import Home from "../views/Home";
import News from "../views/News";
import Messages from "../views/Messages";
import Detail from "../views/Detail";

Vue.use(VueRouter);

// 定义路由
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'messages',
          component: Messages,
          children: [
            {
              path: 'detail/:id',
              component: Detail
            }
          ]
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: 'about'
    }
  ]
})

export default router;
