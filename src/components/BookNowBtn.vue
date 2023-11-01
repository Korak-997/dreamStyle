<script>
export default {
  name: "BookNow",
  methods: {
    show() {
      console.log("it should be shown");
      this.$store.commit("setIsBookingModalOpen");
    },
  },
};
</script>
<template>
  <button
    class="btn btn-primary btn-lg m-4 rounded-md flex items-center justify-center"
    @click="show"
  >
    {{ $t("common.bookNow") }}
  </button>
</template>
<style scoped>
button {
  transition: all ease-in-out 0.8s;
}
</style>
