import { createStore } from "vuex";

export default createStore({
  state: {
    isBookingModalOpen: false,
    barbers: [],
    appointments: [],
    services: {
      men: {
        machineHaircut: {
          name: "machineHairCut",
          price: 15,
          time: 0.15,
        },
        hairCut: {
          name: "hairCut",
          price: 18,
          time: 0.2,
        },
        washCutDry: {
          name: "washCutDry",
          price: 20,
          time: 0.3,
        },
        washDry: {
          name: "washDry",
          price: 10,
          time: 0.1,
        },
        beardShave: {
          name: "beardShave",
          price: 12,
          time: 0.2,
        },
        beardTrim: {
          name: "beardTrim",
          price: 10,
          time: 0.1,
        },
        wax: {
          name: "wax",
          price: 10,
          time: 0.2,
        },
        eyeBrow: {
          name: "eyeBrow",
          price: 10,
          time: 0.1,
        },
        kid: {
          name: "kid",
          price: 15,
          time: 0.2,
        },
        complete: {
          name: "complete",
          price: 45,
          time: 1,
        },
      },
      women: {
        hairCut: {
          name: "hairCut",
          lengths: {
            short: {
              name: "short",
              price: 30,
            },
            chin: {
              name: "chin",
              price: 30,
            },
            shoulder: {
              name: "shoulder",
              price: 30,
            },
            breast: {
              name: "breast",
              price: 30,
            },
            longBreast: {
              name: "longBreast",
              price: 30,
            },
          },
        },
        washCutDry: {
          name: "washDry",
          lengths: {
            short: {
              name: "short",
              price: 40,
            },
            chin: {
              name: "chin",
              price: 45,
            },
            shoulder: {
              name: "shoulder",
              price: 55,
            },
            breast: {
              name: "breast",
              price: 65,
            },
            longBreast: {
              name: "longBreast",
              price: 75,
            },
          },
        },
        coloration: {
          name: "coloration",
          lengths: {
            short: {
              name: "short",
              price: 35,
            },
            chin: {
              name: "chin",
              price: 40,
            },
            shoulder: {
              name: "shoulder",
              price: 50,
            },
            breast: {
              name: "breast",
              price: 60,
            },
            longBreast: {
              name: "longBreast",
              price: 70,
            },
          },
        },
        strandsTop: {
          name: "strandsTop",
          lengths: {
            short: {
              name: "short",
              price: 45,
            },
            chin: {
              name: "chin",
              price: 55,
            },
            shoulder: {
              name: "shoulder",
              price: 65,
            },
            breast: {
              name: "breast",
              price: 75,
            },
            longBreast: {
              name: "longBreast",
              price: 85,
            },
          },
        },
        strands: {
          name: "strands",
          lengths: {
            short: {
              name: "short",
              price: 70,
            },
            chin: {
              name: "chin",
              price: 80,
            },
            shoulder: {
              name: "shoulder",
              price: 90,
            },
            breast: {
              name: "breast",
              price: 100,
            },
            longBreast: {
              name: "longBreast",
              price: 110,
            },
          },
        },
        ombre: {
          name: "ombre",
          lengths: {
            shoulder: {
              name: "shoulder",
              price: 145,
            },
            breast: {
              name: "breast",
              price: 165,
            },
            longBreast: {
              name: "longBreast",
              price: 175,
            },
          },
        },
      },
    },
  },
  getters: {
    getIsBookingModalOpen: (state) => state.isBookingModalOpen,
    getServices: (state) => state.services,
  },
  mutations: {
    setIsBookingModalOpen: (state) =>
      (state.isBookingModalOpen = !state.isBookingModalOpen),
  },
  actions: {},
  modules: {},
});
