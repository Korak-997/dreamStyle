<script>
import BookNowBtn from "../components/BookNowBtn.vue";

export default {
  name: "ServicesPage",
  data() {
    return {
      currentService: false,
      services: {
        men: {
          name: "services.men",
          items: [
            "services.hairCut",
            "services.machineCut",
            "services.washCutDry",
            "services.washDry",
            "services.beardShave",
            "services.BeardTrim",
            "services.wax",
            "services.eyebrow",
            "services.complete",
          ],
        },
        women: {
          name: "services.women",
          items: [
            "services.haircut",
            "services.washCutDry",
            "services.washDry",
            "services.eyebrow",
            "services.coloration",
            "services.strandsTop",
            "services.strands",
            "services.ombre",
            "services.singleStrand",
            "services.pony",
            "services.eyelashColor",
            "services.eyeBrowColor",
            "services.eyeBrowPluck",
            "services.faceHairPluck",
            "services.hairWash",
            "services.headMassageWash",
            "services.hairMaskHairCur",
          ],
        },
        children: {
          name: "services.kid",
          items: ["services.hairCutBoys", "services.hairCutGirls"],
        },
      },
    };
  },
  components: {
    BookNowBtn,
  },
  methods: {},
  mounted() {
    if (this.services[this.$route.query.service]) {
      this.currentService = this.services[this.$route.query.service];
    }
  },
};
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <BookNowBtn />
    <div v-if="!currentService">
      <div
        v-for="service in services"
        :key="service.name"
        class="flex items-center justify-center"
      >
        <div
          class="flex items-center justify-around flex-col my-4 p-2 shadow-sm w-11/12 shadow-primary"
        >
          <h1 class="text-4xl font-extrabold text-neutral m-4">
            {{ $t(`${service.name}`) }}
          </h1>
          <div
            class="w-11/12 flex items-center justify-around p-2 flex-wrap gap-4"
          >
            <p
              v-for="item in service.items"
              :key="item"
              class="lg:text-4xl md:text-2xl text-xl font-extrabold bg-primary p-2 w-96 text-white"
            >
              {{ $t(`${item}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentService" class="p-4">
      <h1 class="text-4xl font-extrabold text-neutral">
        {{ $t(`${currentService.name}`) }}
      </h1>
      <div class="w-11/12 flex items-center justify-around p-2 flex-wrap gap-4">
        <p
          v-for="item in currentService.items"
          :key="item"
          class="lg:text-4xl md:text-2xl text-xl font-extrabold bg-primary p-2 w-96 text-white"
        >
          {{ $t(`${item}`) }}
        </p>
      </div>
    </div>
  </div>
</template>
