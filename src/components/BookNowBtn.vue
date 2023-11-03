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
  <div>
    <button
      @click="show"
      class="btn border-0 rounded-sm bg-accent outline-none inline-flex items-center justify-between text-white overflow-hidden cursor-pointer w-64"
    >
      <i class="animation"></i> {{ $t("common.bookNow") }}
      <i class="animation"></i>
    </button>
  </div>
</template>
<style scoped>
.btn:hover {
  opacity: 0.95;
}

.btn .animation {
  border-radius: 100%;
  animation: ripple 0.6s linear infinite;
}

@keyframes ripple {
  0% {
    box-shadow:
      0 0 0 0 rgba(255, 255, 255, 0.1),
      0 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 0 40px rgba(255, 255, 255, 0.1),
      0 0 0 60px rgba(255, 255, 255, 0.1);
  }

  100% {
    box-shadow:
      0 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 0 40px rgba(255, 255, 255, 0.1),
      0 0 0 60px rgba(255, 255, 255, 0.1),
      0 0 0 80px rgba(255, 255, 255, 0);
  }
}
</style>
