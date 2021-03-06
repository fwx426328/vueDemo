import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['../page/index.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../page/login/login.vue'], resolve)
    },
    {
      path: '/regist',
      name: 'regist',
      component: resolve => require(['../page/login/regist.vue'], resolve)
    },
    {
      path: '/videoList',
      name: 'videoList',
      component: resolve => require(['../page/index/videoList.vue'], resolve)
    },
    {
      path: '/videoDetail',
      name: 'videoDetail',
      component: resolve => require(['../page/index/videoDetail.vue'], resolve)
    }
  ]
});
