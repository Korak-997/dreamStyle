<script>
export default {
  name: "ServiceModalModal",
  props: {
    show: Boolean,
    service: Object,
  },
};
</script>
<template>
  <div
    class="modal backdrop-blur-md z-40 bg-base-200 bg-opacity-50"
    :class="{ 'modal-open': show }"
  >
    <div class="flex items-center justify-around flex-col gap-6 w-full">
      <div class="flex items-center justify-between w-11/12">
        <h1 class="text-4xl font-extrabold text-white">
          {{ $t(`${service.name}`) }}
        </h1>
        <button
          class="btn btn-error text-2xl"
          @click.prevent="() => $router.go('')"
        >
          X
        </button>
      </div>
      <div class="w-11/12 flex items-center justify-around p-2 flex-wrap gap-4">
        <p
          v-for="(item, index) in service.items"
          :key="index"
          class="text-4xl font-extrabold bg-primary p-2 w-96"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>
