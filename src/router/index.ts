import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/example01",
    component: () => import ("@/views/example01/Example01.vue")
  },
  {
    props: true,
    path: "/example02/students/:sid/homeworks/:hid",
    component: () => import ("@/views/example02/Example02-1.vue")
  },
  {
    props: true,
    path: "/example03",
    component: () => import ("@/views/example03/Example03.vue")
  },
  {
    props: true,
    path: "/homework01",
    component: () => import ("@/views/homework01/Homework01.vue"),
  },
  {
    props: true,
    path: "/example04",
    component: () => import ("@/views/example04/Example04.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
