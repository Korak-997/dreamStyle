<script>
import { RouterView } from "vue-router";
import ContactUs from "./components/ContactUs.vue";
import BookingModal from "./components/BookingModal.vue";
import FooterComponent from "./components/Footer.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    NavbarComponent,
    RouterView,
    FooterComponent,
    ThemeSwitcher,
    ContactUs,
    BookingModal,
  },
  computed: {
    isBookModalOpen() {
      return this.$store.getters.getIsBookingModalOpen;
    },
  },

  created() {
    this.$store.dispatch("getBarbersFromDB");
    this.$store.dispatch("getAppointmentsFromDB");
  },
  mounted() {
    const locale =
      JSON.parse(localStorage.getItem("alphaSalon")).settings.locale ??
      import.meta.env.VITE_DEFAULT_LOCALE;

    const html = document.getElementsByTagName("html")[0];
    html.lang = locale;
  },
};
</script>

<template>
  <div class="bg-base-100">
    <div class="drawer" style="direction: ltr">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content overflow-x-hidden">
        <navbar-component />
        <BookingModal :show="isBookModalOpen" />

        <RouterView />
        <FooterComponent />
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 h-full bg-base-100 text-2xl">
          <div class="flex items-center justify-between my-4">
            <label
              for="my-drawer"
              class="text-4xl text-neutral hover:cursor-pointer hover:text-primary"
            >
              <font-awesome-icon icon="fa-solid fa-xmark" /></label
            ><ThemeSwitcher />
          </div>

          <!-- Sidebar content here -->
          <li class="text-neutral hover:text-primary">
            <RouterLink to="/home">
              <span><font-awesome-icon icon="fa-solid fa-home" /></span>
              {{ $t("common.home") }}
            </RouterLink>
          </li>
          <li class="text-neutral hover:text-primary">
            <RouterLink to="/prices">
              <span
                ><font-awesome-icon icon="fa-solid fa-hand-holding-dollar"
              /></span>
              {{ $t("common.prices") }}
            </RouterLink>
          </li>
          <li class="text-neutral hover:text-primary">
            <RouterLink to="/about">
              <span><font-awesome-icon icon="fa-solid fa-info" /></span>
              {{ $t("common.about") }}
            </RouterLink>
          </li>
          <div class="text-primary text-sm contact absolute">
            <ContactUs />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.contact {
  bottom: 5rem;
}
</style>
