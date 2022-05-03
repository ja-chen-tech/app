//引入路由组件
// import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
export default [
    {
        path: '/home',
        //路由懒加载
        component:()=>import('@/pages/Home'),
        meta: { show: true }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true }

    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: { show: true }
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        name: 'shopCart',
        path: '/shopcart',
        component: ShopCart,
        meta: { show: true }
    },
    {
        name: 'trade',
        path: '/trade',
        component: Trade,
        meta: { show: true }
    },
    {
        name: 'pay',
        path: '/pay',
        component: Pay,
        meta: { show: true }
    },
    {
        name: 'paysuccess',
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: true }
    },
    {
        name: 'center',
        path: '/center',
        component: Center,
        meta: { show: true },
        //二级路由组件
        children: [
            {
                path: 'myorder',
                component: MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        //重定向，在项目跑起来的时候，立马定向到首页
        path: '*',
        redirect: '/home'
    }
]