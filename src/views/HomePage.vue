<script>
import BookNowBtn from "../components/BookNowBtn.vue";
import OpeningTimes from "../components/OpeningTimes.vue";
import kidHairCut from "@/assets/servicesImgs/kid-haircut.webp";
import manHairCut from "@/assets/servicesImgs/man-haircut.webp";
import womanHaircut from "@/assets/servicesImgs/woman-haircut.webp";
import ServiceModal from "../components/ServiceModal.vue";

export default {
  name: "HomePage",
  data() {
    return {
      showServiceModal: false,
      services: {
        men: {
          img: manHairCut,
          name: "services.men",
          items: [
            "Maschineller Haarschnitt",
            "Haarschnitt",
            "Waschen, Schneiden, Föhnen",
            "Waschen, Föhnen",
            "Bartrasur",
            "Bartschneiden",
            "Wax: Nase, Ohren und Gesicht",
            "Augenbrauen (Faden Technik)",
            "Kinderhaarschnitt (bis 10)",
            "Komplettservice (Herrenpaket).",
          ],
        },
        women: {
          img: womanHaircut,
          name: "services.women",
          items: [
            "Haarschnitt",
            "Waschen, Schneiden, Föhnen",
            "Waschen, Föhnen",
            "Augenbraue (Faden Technik)",
            "Färbung",
            "Kopfstränge",
            "Komplette Stränge",
            "Ombre",
            "Einzelner Strang",
            "Pony",
            "Wimpernfarbe",
            "Augenbrauenfarbe",
            "Augenbrauen zupfen",
            "Gesichtshaarzupfung",
            "Haare waschen",
            "Kopf massage, Waschen",
            "Haarmaske, Haarpflege",
          ],
        },
        kinder: {
          img: kidHairCut,
          name: "services.kid",
          items: ["Haarschnitt für Jungen", "Haarschnitt für Mäddels"],
        },
      },
      serviceToShow: false,
    };
  },
  components: {
    BookNowBtn,
    OpeningTimes,
    ServiceModal,
  },
  methods: {},
};
</script>
<template>
  <div class="flex flex-col items-center justify-center">
    <ServiceModal :show="showServiceModal" :service="serviceToShow" />
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
      <div v-for="(service, index) in services" :key="index">
        <div
          @click="
            () => {
              serviceToShow = service;
              showServiceModal = true;
            }
          "
          class="card w-96 h-96 bg-base-100 shadow-xl hover:cursor-pointer hover:shadow-lg hover:shadow-primary rounded-none"
          :style="`background:url(${service.img}); background-size:cover; background-repeat: no-repeat; background-position: center;`"
        >
          <div
            class="backdrop-brightness-50 w-full h-full flex items-end justify-end p-2"
          >
            <p class="text-4xl font-bold text-white">
              {{ $t(`${service.name}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
