import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import MainPage from "@/components/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/", component: MainPage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
