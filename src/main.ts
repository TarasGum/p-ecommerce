import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/app/App.vue";
import router from "@/app/router/index";
import "@/app/assets/styles/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
