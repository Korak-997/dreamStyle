<script>
export default {
  name: "SocialLinks",
  data() {
    return {
      links: [
        { url: "www.instagram.com", icon: "fa-instagram" },
        { url: "www.facebook.com", icon: "fa-facebook" },
        { url: "www.tiktok.com", icon: "fa-tiktok" },
      ],
    };
  },
};
</script>
<template>
  <div class="card flex flex-row items-center justify-around">
    <a
      v-for="(link, idx) in links"
      :key="idx"
      :href="link.url"
      target="-blank"
      class="relative flex items-center justify-center rounded-full p-2 text-primary text-2xl m-2"
      :class="`social-link${idx + 1}`"
    >
      <font-awesome-icon :icon="`fa-brands ${link.icon}`" />
    </a>
  </div>
</template>
<style scoped>
a:nth-child(1):hover {
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  box-shadow: 0 0 10px #bc1888;
  animation: bounce_613 0.8s linear;
  color: snow;
}

a:nth-child(2):hover {
  background-color: #4267b2;
  box-shadow: 0 0 10px #4267b2;
  animation: bounce_613 0.8s linear;
  color: snow;
}

a:nth-child(3):hover {
  background-color: #000;
  box-shadow: 0 0 10px #848383;
  animation: bounce_613 0.8s linear;
  color: snow;
}

@keyframes bounce_613 {
  40% {
    transform: scale(1.2);
  }

  60% {
    transform: scale(0.8);
  }

  80% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
