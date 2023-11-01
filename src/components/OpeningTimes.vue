<script>
export default {
  name: "OpeningTimes",
  data() {
    return {
      days: ["mo-sa", "su"],
    };
  },
};
</script>
<template>
  <div
    class="flex justify-center items-left flex-col gap-4 w-11/12 bg-primary p-4"
  >
    <h1 class="text-4xl text-white font-extrabold">
      {{ $t("common.openTime") }}
    </h1>
    <div
      v-for="(day, idx) in days"
      :key="idx"
      class="flex gap-2 text-sm w-full items-center justify-center text-white"
    >
      <h1 class="md:text-4xl">
        {{ $t(`common.days.${day}`) }}
        <span v-if="day === 'su'">{{ $t("common.closed") }}</span>
        <span v-else>10.00-19.00</span>
      </h1>
    </div>
  </div>
</template>
