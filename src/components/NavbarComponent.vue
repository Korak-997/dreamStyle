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
    <div class="navbar h-fit shadow-sm shadow-primary bg-base-100">
      <div class="navbar-start">
        <label
          for="my-drawer"
          class="text-4xl hover:cursor-pointer text-primary hover:text-accent burger-wrapper"
        >
          <div class="burger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
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
<style>
.burger-icon {
  position: relative;
  width: 70px;
  height: 70px;
  background-color: transparent;
  box-shadow: 0 2px 10px var(--primary);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.burger-icon span {
  position: absolute;
  height: 2px;
  width: 40px;
  background-color: var(--primary);
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;
}

.burger-icon span:nth-child(1) {
  transform: translateY(-15px);
  width: 25px;
  left: 15px;
}

.burger-icon.burger-icon:hover span:nth-child(1) {
  width: 40px;
  transform: translateY(0px) rotate(45deg);
  transition-delay: 0.125s;
}

.burger-icon span:nth-child(2) {
  transform: translateY(15px);
  width: 15px;
  left: 15px;
}

.burger-icon.burger-icon:hover span:nth-child(2) {
  width: 40px;
  transform: translateY(0px) rotate(315deg);
  transition-delay: 0.125s;
}

.burger-icon:hover span:nth-child(3) {
  transform: translateX(60px);
}
</style>
