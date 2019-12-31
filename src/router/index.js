import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/components/error/404'
import InformationManagement from '@/views/MenuContent/informationManagement'
import MessageOfMe from '@/views/MenuContent/messageOfMe'
import MyRumor from '@/views/MenuContent/myRumor'
import studentManagement from '@/views/MenuContent/ProfessionalManagement/studentManagement/index.vue'
import classManagement from '@/views/MenuContent/ProfessionalManagement/classManagement/index.vue'
import classDetail from '@/views/MenuContent/ProfessionalManagement/classManagement/classModel/classDetail.vue'
Vue.use(Router)

var router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        requireAuth: true, // 是否需要登录的
        title: "首页" // 页面标题
      },
      children: [
        {
          path: '/InformationManagement',
          name: 'InformationManagement',
          component: InformationManagement,
          meta: {
            requireAuth: true, // 是否需要登录的
            title: "信息管理" // 页面标题
          }
        },
        {
          path: '/MessageOfMe',
          name: 'MessageOfMe',
          component: MessageOfMe,
          meta: {
            requireAuth: true, // 是否需要登录的
            title: "我的留言" // 页面标题
          }
        },
        {
          path: '/MyRumor',
          name: 'MyRumor',
          component: MyRumor,
          meta: {
            requireAuth: true, // 是否需要登录的
            title: "我的谏言" // 页面标题
          }
        },
        {
          path: '/studentManagement',
          name: 'studentManagement',
          component: studentManagement,
          meta: {
            requireAuth: true, // 是否需要登录的
            title: "学生管理" // 页面标题
          }
        },
        {
          path: '/classManagement',
          name: 'classManagement',
          component: classManagement,
          meta: {
            requireAuth: true, // 是否需要登录的
            title: "班级管理" // 页面标题
          }
        },
        {
          path: '/classDetail',
          name: 'classDetail',
          component: classDetail,
          meta: {
            requireAuth: true, // 是否需要登录的
            title: "班级信息" // 页面标题
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      // title: '登陆页面',
      component: Login,
      meta: {
        requireAuth: true, // 是否需要登录的
        title: "登陆页面" // 页面标题
      }
    }
    ,{
      path: '/404',
      name: 'notFound',
      // title: '错误页面',
      component: NotFound,
      meta: {
        requireAuth: true, // 是否需要登录的
        title: "错误页面" // 页面标题
      }
    }
  ]

});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '学生就业信息管理系统';
  let user =sessionStorage.getItem('user');
  if(to.path == '/login') {
     if(user){
       next({ path: '/'})
     } else{
       next()
     }
  }else {
    if(!user) {
      next({ path: '/login'})
    }else {
      next()
    }
  }

})
export default router;
