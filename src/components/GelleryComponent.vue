<script>
export default {
  name: "GelleryComponent",
  data() {
    return {
      images: [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
      ],
    };
  },
  methods: {
    getImgUrl(img) {
      return new URL(`../assets/gellery/${img}`, import.meta.url);
    },
    handleZoom(e) {
      e.target.style = "zoom:150%;";
    },
  },
};
</script>
<template>
  <img
    loading="lazy"
    class="w-96"
    v-for="(image, index) of images"
    v-bind:src="getImgUrl(image)"
    v-bind:key="index"
    :onclick="handleZoom"
    alt="Gallery Image"
  />
</template>
