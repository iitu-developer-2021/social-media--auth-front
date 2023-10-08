import { createRouter, createWebHistory } from "vue-router";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useAuth } from "../store/auth";

//@ts-ignore
import Home from "../views/Home.vue";
//@ts-ignore
import Login from "../views/Login.vue";
//@ts-ignore
import LoginSuccess from "../views/LoginSuccess.vue";

export const requireAuth = (
  _: RouteLocationNormalized,
  __: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (!localStorage.getItem("token")) {
    return next("/login");
  }

  next();
};

export const notAuth = (
  _: RouteLocationNormalized,
  __: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (localStorage.getItem("token")) {
    return next("/");
  }

  next();
};

const routes = [
  { path: "/", component: Home, beforeEnter: requireAuth },
  { path: "/login", component: Login, beforeEnter: notAuth },
  { path: "/login-success", component: LoginSuccess },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
