import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载（通过箭头函数引入这几个tabbar的组件）
const Index = () => import('../components/index.vue')
const List = () => import('../components/list.vue')
const Register = () => import('../components/register.vue')


// 1.安装插件
Vue.use(VueRouter)
// 这个是懒加载，懒加载过来以后在下面的const routes = []中配置映射关系。
// const Home = () => import()
// 2.创建路由对象
const routes = [
    {
        path:'',
        redirect:'/index',
    },
    {
        path:'/index',
        component:Index,
    },
    {
        path:'/list',
        component:List,
    },
    {
        path:'/register',
        component:Register,
    },
    
]
const router = new VueRouter({
    routes,
    mode:'history',
})

// 3.导出
export default router