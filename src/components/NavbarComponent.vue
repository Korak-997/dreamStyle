<script>
import { RouterLink } from "vue-router";
import LanguagePicker from "./LanguagePicker.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
export default {
  name: "NavbarComponent",
  data() {
    return {
      navLinks: [
        {
          text: "common.home",
          url: "/home",
          icon: "fa-solid fa-home",
        },
        {
          text: "common.prices",
          url: "/prices",
          icon: "fa-solid fa-hand-holding-dollar",
        },
        {
          text: "common.about",
          url: "/about",
          icon: "fa-solid fa-info",
        },
      ],
    };
  },
  components: {
    RouterLink,
    LanguagePicker,
    ThemeSwitcher,
  },
};
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <button
          tabindex="0"
          class="menu-icon hover:rotate-90 md:hidden w-8 h-8 p-1 flex flex-col justify-between items-end"
        >
          <span class="w-full h-1 rounded-sm bg-neutral"></span>
          <span class="w-3/4 h-1 rounded-sm bg-neutral"></span>
          <span class="w-1/2 h-1 rounded-sm bg-neutral"></span>
        </button>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 h-fit"
        >
          <li
            v-for="(link, idx) in navLinks"
            :key="idx + 1"
            class="text-neutral hover:text-primary"
            :title="$t(link.text)"
          >
            <RouterLink :to="link.url">
              <font-awesome-icon :icon="link.icon" />
              {{ $t(link.text) }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1">
        <li
          v-for="(link, idx) in navLinks"
          :key="idx + 1 * 10"
          class="text-neutral hover:text-primary"
          :title="$t(link.text)"
        >
          <RouterLink :to="link.url">
            <font-awesome-icon :icon="link.icon" />
            {{ $t(link.text) }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeSwitcher />
      <language-picker></language-picker>
    </div>
  </div>
</template>
<style scoped>
.menu-icon {
  transition: transform 0.4s;
}

.menu-icon span {
  transition:
    width 0.4s,
    transform 0.4s,
    background-color 0.4s;
}

.menu-icon:hover span {
  width: 0.25rem;
  transform: translateX(-10px);
  background-color: #ad93b8;
}
</style>
