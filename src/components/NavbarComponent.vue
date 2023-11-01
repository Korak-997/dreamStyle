<script>
import { RouterLink } from "vue-router";
import LanguagePicker from "./LanguagePicker.vue";

export default {
  name: "NavbarComponent",

  components: {
    RouterLink,
    LanguagePicker,
  },
};
</script>
<template>
  <div>
    <div class="navbar h-fit shadow-sm shadow-neutral bg-black">
      <div class="navbar-start">
        <label
          for="my-drawer"
          class="text-4xl hover:cursor-pointer text-primary hover:text-accent"
        >
          <font-awesome-icon icon="fa-solid fa-bars"
        /></label>
      </div>
      <div class="navbar-center">
        <RouterLink to="/home">
          <img src="@/assets/logo.png" class="h-24" alt="logo" />
        </RouterLink>
      </div>
      <div class="navbar-end">
        <language-picker></language-picker>
      </div>
    </div>
  </div>
</template>
