<script>
  export default {
    name: "BookingModal",
    props: {
      show: Boolean,
    },
  };
</script>
<template>
  <div
    class="modal backdrop-blur-md z-40 bg-base-100 bg-opacity-50"
    :class="{ 'modal-open': show }"
  >
    <div class="flex items-center justify-around flex-col w-11/12 gap-6">
      <h1 class="font-bold text-white text-4xl bg-primary p-2">
        {{ $t("appointment.getAppointment") }}
      </h1>
      <div class="p-4 text-center">
        <p class="md:text-4xl text-2xl text-neutral">
          {{ $t("appointment.callUsForAppointment") }}
        </p>
        <p class="md:text-6xl text-4xl text-primary font-bold my-4">
          03471/5555555
        </p>
      </div>
      <button
        class="btn btn-error text-2xl"
        @click.prevent="() => $router.go('')"
      >
        X
      </button>
    </div>
  </div>
</template>
