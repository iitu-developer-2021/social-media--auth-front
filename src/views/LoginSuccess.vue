<template>
  <div />
</template>
<script lang="ts" setup>
import HelloWorld from "./components/HelloWorld.vue";
import { useRouter } from "vue-router";
import { useAuth } from "../store/auth.ts";
import { storeToRef } from "pinia";
import Cookies from "js-cookie";
const router = useRouter();
const authCookie = Cookies.get("auth");
const authStore = useAuth();

if (authCookie) {
  const authData = JSON.parse(authCookie);
  const token = authData.token;
  const user = authData.user;
  authStore.user = user;
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("user", JSON.stringify(user));
  router.push("/");
} else {
  router.push("/login");
}
</script>
