import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/chapterList',
    name: 'chapterList',
    component: Layout,
    redirect: '/consultant/chapter',
    meta: { title: '章节列表', icon: 'documentation' },
    hidden: true,
    children: [
      { 
        name: 'chapter',
        path: '/consultant/chapter',
        component: () => import('@/views/consultant/chapter'),
        meta: { title: '查看章节', icon: 'list' },
        hidden: true
      }
    ]
  },
  {
    path: '/consultantInfo',
    name: 'info',
    component: Layout,
    redirect: '/consultant/info',
    meta: { title: '基本资料', icon: 'documentation' },
    hidden: true,
    children: [
      { 
        name: 'chapter',
        path: '/consultant/info',
        component: () => import('@/views/consultant/info'),
        meta: { title: '基本资料', icon: 'list' },
        hidden: true
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dataMgt'
  },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  {
    path:'/dataMgt',
    name:'dataMgt',
    component:Layout,
    redirect:'/dataMgt/showData',
    meta:{title:'数据概括',icon:'documentation',roles: ['admin','data1']},
    children:[
      { name:'/showData',
        path:'/dataMgt/showData',
        component: () => import('@/views/dataMgt/showData'),
        meta:{title:'数据概括',icon:'skill',roles: ['admin','data1']}
      }
    ]
  },
  {
    path:'/userMgt',
    name:'userMgt',
    component:Layout,
    redirect:'/userMgt/index',
    meta:{title:'用户管理',icon:'documentation',roles:['admin','user1']},
    children:[
      { name:'user',
        path:'/userMgt/index',
        component: () => import('@/views/userMgt/index'),
        meta:{title:'用户管理',icon:'list',roles:['admin','user1']}
      }
    ]
  },
  {
    path:'/consultant',
    name:'consultant',
    component:Layout,
    redirect:'/consultant/class',
    meta:{title:'咨询师管理',icon:'list',roles:['admin','cons1','cons2','cons3']},
    children:[
      { name:'conclass',
        path:'/consultant/class',
        component: () => import('@/views/consultant/class'),
        meta:{title:'咨询师分类',icon:'list',roles:['admin','cons1']}
      },
      { name:'conlist',
        path:'/consultant/list',
        component: () => import('@/views/consultant/list'),
        meta:{title:'咨询师列表',icon:'list',roles:['admin','cons2']}
      },
      { name:'custom',
        path:'/consultant/custom',
        component: () => import('@/views/consultant/custom'),
        meta:{title:'私人定制',icon:'list',roles:['admin','cons3']}
      }
    ]
  },
  {
    path:'/orderMgt',
    name:'orderMgt',
    component:Layout,
    redirect:'/orderMgt/advisory',
    meta:{title:'订单管理',icon:'documentation',roles:['admin','order1','order2','order3']},
    children:[
      { name:'user',
        path:'/orderMgt/advisory',
        component: () => import('@/views/orderMgt/advisory'),
        meta:{title:'咨询订单',icon:'list',roles:['admin','order1']}
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
