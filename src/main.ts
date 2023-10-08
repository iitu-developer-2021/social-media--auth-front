import { createApp } from "vue";
import { router } from "./router";
import { createPinia } from "pinia";
import "./style.css";
//@ts-ignore
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
