import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
/*   mode: "history", */
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:"/customer"
    },
    {
      path: "/customer/",
      name: "home",
      component: () => import("../views/index.vue"),
    },
    {
      path: "/customer/products",
      name: "products",
      component: () => import("../views/food.vue"),
    },
    {
      path: "/customer/cart",
      name: "cart",
      component: () => import("../views/cart.vue"),
    },
  ],
});

export default router;
