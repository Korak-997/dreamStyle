<script>
  import BookNowBtn from "./BookNowBtn.vue";
  import ContactUs from "./ContactUs.vue";
  import SocialLinks from "./SocialLinks.vue";
  import { RouterLink } from "vue-router";

  export default {
    name: "FooterComponent",
    data() {
      return {};
    },
    components: { SocialLinks, BookNowBtn, ContactUs, RouterLink },
    methods: {},
  };
</script>
<template>
  <footer
    class="footer flex flex-wrap items-center justify-center gap-6 p-4 pb-6 shadow-sm shadow-neutral bg-black"
  >
    <RouterLink to="/home">
      <img
        src="@/assets/logo.png"
        class="h-24"
        alt="logo"
      />
    </RouterLink>
    <ContactUs />
    <BookNowBtn />
    <SocialLinks />
  </footer>
</template>
