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
  <button @click="show">
    {{ $t("common.bookNow") }}
  </button>
</template>
<style scoped>
  button {
    --color: var(--primary);
    --color2: snow;
    padding: 0.8em 1.75em;
    background-color: transparent;
    border-radius: 6px;
    border: 0.3px solid var(--color);
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    font-weight: 300;
    font-size: 17px;
    font-family: "Roboto", "Segoe UI", sans-serif;
    text-transform: uppercase;
    color: var(--color);
  }

  button::after,
  button::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    transform: skew(90deg) translate(-50%, -50%);
    position: absolute;
    inset: 50%;
    left: 25%;
    z-index: -1;
    transition: 0.5s ease-out;
    background-color: var(--color);
  }

  button::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
  }

  button:hover::before {
    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
  }

  button:hover::after {
    transform: skew(45deg) translate(-50%, -50%);
  }

  button:hover {
    color: var(--color2);
  }

  button:active {
    filter: brightness(0.7);
    transform: scale(0.98);
  }
</style>
