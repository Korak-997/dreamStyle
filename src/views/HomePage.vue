<script>
  import BookNowBtn from "../components/BookNowBtn.vue";
  import OpeningTimes from "../components/OpeningTimes.vue";
  import kidHairCut from "@/assets/servicesImgs/kid-haircut.webp";
  import manHairCut from "@/assets/servicesImgs/man-haircut.webp";
  import womanHaircut from "@/assets/servicesImgs/woman-haircut.webp";
  import BarberCard from "../components/BarberCard.vue";

  export default {
    name: "HomePage",
    data() {
      return {
        showServiceModal: false,
        services: {
          men: {
            img: manHairCut,
            name: "men",
            title: "services.men",
          },
          women: {
            img: womanHaircut,
            name: "women",
            title: "services.women",
          },
          kinder: {
            img: kidHairCut,
            name: "children",
            title: "services.kid",
          },
        },
      };
    },
    computed: {
      barbers() {
        return this.$store.getters.getBarbers;
      },
    },
    components: {
      BookNowBtn,
      OpeningTimes,
      BarberCard,
    },
    methods: {},
  };
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="mt-4 shadow-lg shadow-primary rounded-md p-6 flex items-center justify-between flex-col gap-10"
    >
      <h1 class="text-4xl text-primary font-extrabold">
        {{ $t("home.bookAppointment.title") }}
      </h1>
      <BookNowBtn />
    </div>
    <div class="my-6 w-11/12">
      <OpeningTimes />
    </div>
    <div class="my-6 flex items-center justify-around flex-wrap gap-4">
      <div
        v-for="(service, index) in services"
        :key="index"
      >
        <RouterLink
          :to="`/services?service=${service.name}`"
          class="card w-96 h-96 bg-base-100 shadow-xl hover:cursor-pointer hover:shadow-sm hover:shadow-neutral rounded-none"
          :style="`background:url(${service.img}); background-size:cover; background-repeat: no-repeat; background-position: center;`"
        >
          <div
            class="backdrop-brightness-50 w-full h-full flex items-end justify-end p-2"
          >
            <p class="text-4xl font-bold text-white">
              {{ $t(`${service.title}`) }}
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="my-6 flex items-center justify-around flex-wrap gap-4 flex-col">
      <h1 class="text-4xl text-primary font-extrabold">
        {{ $t("home.ourTeam") }}
      </h1>
      <div class="flex items-center justify-around flex-wrap gap-4">
        <BarberCard
          v-for="barber in barbers"
          :key="barber.id"
          :barber="barber"
        />
      </div>
    </div>
  </div>
</template>
