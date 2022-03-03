import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route } from "vue-router";
import { ItemView, UserView } from "../views";
import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import store from "../store/index";
import { ActionTypes } from "@/store/actions";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: createListView("NewsView"),
      async beforeEnter(routeTo: Route, routeFrom: Route, next: NavigationGuardNext<Vue>) {
        bus.$emit("on:progress");
        next();
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
      async beforeEnter(routeTo: Route, routeFrom: Route, next: NavigationGuardNext<Vue>) {
        bus.$emit("on:progress");
        try {
          await store.dispatch(ActionTypes.FETCH_ASK);
          next();
        } catch (err) {
          console.log(err);
        }
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
      async beforeEnter(routeTo: Route, routeFrom: Route, next: NavigationGuardNext<Vue>) {
        bus.$emit("on:progress");
        try {
          await store.dispatch(ActionTypes.FETCH_JOBS);
          next();
        } catch (err) {
          console.log(err);
        }
      },
    },
    {
      path: "/item/:id",
      component: ItemView,
      async beforeEnter(routeTo: Route, routeFrom: Route, next: NavigationGuardNext<Vue>) {
        bus.$emit("on:progress");
        const itemId = routeTo.params.id;
        try {
          await store.dispatch("FETCH_ITEM", itemId);
          next();
        } catch (err) {
          console.log(err);
        }
      },
    },
    {
      path: "/user/:id",
      component: UserView,
      async beforeEnter(routeTo: Route, routeFrom: Route, next: NavigationGuardNext<Vue>) {
        bus.$emit("on:progress");
        const itemId = routeTo.params.id;
        try {
          await store.dispatch("FETCH_USER", itemId);
          next();
        } catch (err) {
          console.log(err);
        }
      },
    },
  ],
});
