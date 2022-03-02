import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route } from "vue-router";
import { ItemView, UserView } from "../views";
import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import store from "../store/index";

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
        // try {
        //   await store.dispatch("FETCH_LIST", routeTo.name);
        //   next();
        // } catch (err) {
        //   console.log(err);
        //   // next('/error') : 실행시 이동하고자 하는 에러페이지
        // }
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
          await store.dispatch("FETCH_LIST", routeTo.name);
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
          await store.dispatch("FETCH_LIST", routeTo.name);
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
