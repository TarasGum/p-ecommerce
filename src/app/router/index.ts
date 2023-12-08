import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import { profilePage } from "@/pages/profile/";
import { cartPage } from "@/pages/cart/";
import { ordersPage } from "@/pages/orders/";
import { messagePage } from "@/pages/message/";
import { defaultLayout } from "@/layouts/defaultLayout";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: defaultLayout,

      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/profile",
          name: "profile",
          component: profilePage,
        },
        {
          path: "/message",
          name: "message",
          component: messagePage,
        },
        {
          path: "/orders",
          name: "orders",
          component: ordersPage,
        },
        {
          path: "/cart",
          name: "cart",
          component: cartPage,
        },
      ],
    },
  ],
});

export default router;
