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
    <navbar-component />
    <BookingModal :show="isBookModalOpen" />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<style>
  .contact {
    bottom: 5rem;
  }
</style>
