<template>
  <div class="wrapper">
    <img
      :src="auth.user.profileImageUrl"
      class="avatar"
      v-if="auth && auth.user && auth.user.profileImageUrl"
    />
    <el-avatar
      v-else
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      class="avatar"
    />
    Привет,
    {{
      auth && auth.user && auth.user.firstName
        ? auth.user.firstName
        : auth.user.email
    }}
    <el-button class="button" @click="logout">Выйти</el-button>
    <el-button @click="getData">Получить данные</el-button>
  </div>
  <div class="data">
    {{ mocks }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useAuth } from "../store/auth.ts";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import axios from "axios";

const auth = useAuth();
const router = useRouter();

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  auth.user = null;
  auth.token = null;
  router.push("/login");
};

const mocks = ref([]);
const getData = () => {
  return axios
    .get("http://localhost:3010/mocks", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      mocks.value = response.data.result.mocks;
    })
    .catch((error) => {
      ElNotification({
        title: "Ошибка",
        type: "error",
        message: "Случилась какая та ошибка",
      });
    });
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

button {
  margin-left: 10px;
}

.data {
  margin-top: 20px;
}
</style>
