import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import i18n from "./i18n";

import {
  faHouse,
  faInfo,
  faPlus,
  faBars,
  faXmark,
  faCalendar,
  faHandHoldingDollar,
  faList,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./assets/styles/app.css";
import store from "./store";

library.add(
  faHouse,
  faInfo,
  faPlus,
  faBars,
  faXmark,
  faCalendar,
  faInstagram,
  faFacebook,
  faTiktok,
  faHandHoldingDollar,
  faInfo,
  faList,
  faEnvelope,
  faPhone,
);

const app = createApp(App).use(i18n).use(store);
app.config.globalProperties.$isBookModalOpen = false;
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
