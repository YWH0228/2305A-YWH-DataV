import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/index" // 重定向:重新指向其它path,会改变网址
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/IndexView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
