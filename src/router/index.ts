import { createRouter, createWebHistory } from "vue-router";
import EventListView from "@/views/EventListView.vue";
import EventDetails from "@/views/EventDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventListView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/event/:id",
      name: "event-details",
      props: true,
      component: EventDetails,
    },
  ],
});

export default router;
