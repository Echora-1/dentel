import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import MainPage from "@/components/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";
import VueFullscreen from "vue-fullscreen";

const routes = [{ path: "/", component: MainPage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(VueFullscreen);
app.use(router);
app.mount("#app");
