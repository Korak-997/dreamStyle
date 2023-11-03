<script>
export default {
  name: "PricesPage",
  computed: {
    services() {
      return this.$store.getters.getServices;
    },
  },
};
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <h1 class="text-2xl p-2 font-bold mt-6">
      {{ $t("prices.title") }}
    </h1>
    <h1 class="text-2xl font-bold text-neutral">{{ $t("prices.forWomen") }}</h1>
    <div class="container mx-auto p-6 overflow-x-auto w-11/12 my-4">
      <table class="w-full">
        <thead>
          <tr>
            <th></th>
            <th scope="col">
              <p class="px-2 font-medium">
                {{ $t("prices.hairLength.short") }}
              </p>
            </th>
            <th scope="col">
              <p class="px-2 font-medium">
                {{ $t("prices.hairLength.chin") }}
              </p>
            </th>
            <th scope="col">
              <p class="px-2 font-medium">
                {{ $t("prices.hairLength.shoulder") }}
              </p>
            </th>
            <th scope="col">
              <p class="px-2 font-medium">
                {{ $t("prices.hairLength.breast") }}
              </p>
            </th>
            <th scope="col">
              <p class="px-2 font-medium">
                {{ $t("prices.hairLength.longBreast") }}
              </p>
            </th>
          </tr>
        </thead>
        <tbody class="space-y-6 text-center divide-y divide-gray-700">
          <tr v-for="(service, idx) in services.women" :key="idx">
            <th scope="row" class="text-left">
              <h3 class="py-3">
                {{ $t(`prices.${service.name}`) }}
              </h3>
            </th>
            <td v-for="(length, i) in service.lengths" :key="i">
              <span class="block text-sm">{{ length.price }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h1 class="text-2xl font-bold text-neutral">{{ $t("prices.forMen") }}</h1>

    <div class="container mx-auto p-6 overflow-x-auto w-11/12">
      <table class="w-full">
        <thead>
          <tr>
            <th></th>
            <th scope="col">
              <p class="px-2 font-medium">
                {{ $t("prices.cost") }}
              </p>
            </th>
          </tr>
        </thead>
        <tbody class="space-y-6 text-center divide-y divide-gray-700">
          <tr v-for="(service, idx) in services.men" :key="idx">
            <th scope="row" class="text-left">
              <h3 class="py-3">{{ $t(`prices.${service.name}`) }}</h3>
            </th>
            <td>
              <span class="block text-sm">{{ service.price }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
