<script>
  import BookNowBtn from "../components/BookNowBtn.vue";

  export default {
    name: "AboutPage",
    data() {
      return {};
    },
    components: {
      BookNowBtn,
    },
    methods: {},
  };
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <BookNowBtn />
    <div class="w-11/12 flex items-center justify-around gap-6 flex-col">
      <p class="text-neutral shadow shadow-primary p-4">
        {{ $t("about.1") }}
      </p>
      <p class="text-neutral shadow shadow-primary p-4">
        {{ $t("about.2") }}
      </p>
      <p class="text-neutral shadow shadow-primary p-4">
        {{ $t("about.3") }}
      </p>

      <p class="text-neutral shadow shadow-primary p-4">
        {{ $t("about.4") }}
      </p>

      <p class="text-neutral shadow shadow-primary p-4">
        {{ $t("about.5") }}
      </p>

      <p class="text-neutral shadow shadow-primary p-4">
        {{ $t("about.6") }}
      </p>

      <p class="text-neutral shadow shadow-primary p-4">
        {{ $t("about.7") }}
      </p>
    </div>
  </div>
</template>
