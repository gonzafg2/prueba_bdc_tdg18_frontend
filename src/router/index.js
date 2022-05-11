import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import(/* webpackChunkName: "about" */ "../views/AboutView.vue")

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/new-transfer",
    name: "NewTransfer",
    component: () => import("../views/NewTransfer.vue"),
  },
  {
    path: "/data-transfer",
    name: "DataTransfer",
    component: () => import("../views/DataTransfer.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
