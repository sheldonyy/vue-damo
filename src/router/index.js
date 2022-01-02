import Vue from "vue";
import VueRouter from "vue-router";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: "/index",
        name: 'index',  
        meta: {
          name: '主页'  
        },
        component: ()=>import('../pages/index.vue')
    },
    {
        path: "/editor1",
        name: 'editor1',  
        meta: {
            name: '编辑器1'  
        },
        component: ()=>import('../pages/editor1.vue')
    },
    {
        path: "/editor2",
        name: 'editor2',  
        meta: {
            name: '编辑器2'  
        },
        component: ()=>import('../pages/editor2.vue')
    },
    // 重定向
    {
        path: '/', 
        redirect: '/index' 
    }
]

var router =  new VueRouter({
    routes
})
export default router;