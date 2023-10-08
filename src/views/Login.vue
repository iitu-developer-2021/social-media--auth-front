<template>
  <div class="login">
    <div class="login__body">
      <el-button size="large" @click="githubSignin">
        <img class="login__icon" src="../assets/github.svg" />
        Войти по Github
      </el-button>
      <el-button size="large" @click="googleSignIn">
        <img class="login__icon" src="../assets/google.svg" />
        Войти по Google
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const BACKEND_URL = "http://localhost:3010";

const router = useRouter();

const googleSignIn = () => {
  window.location.href = BACKEND_URL + "/auth/google";
};

const githubSignin = () => {
  window.location.href = BACKEND_URL + "/auth/github";
};
</script>
<style lang="scss" scoped>
.login {
  &__icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
}
</style>
