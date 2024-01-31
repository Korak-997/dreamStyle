<script>
  export default {
    name: "BarberCard",
    props: {
      barber: Object,
    },
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
  <div class="max-w-md p-8 sm:flex sm:space-x-6 shadow-md shadow-accent">
    <div class="flex-shrink-0 mb-6 h-44 w-44 sm:h-32 sm:w-32 sm:mb-0">
      <img
        :src="barber.picture"
        alt="barber avatar"
        class="object-cover object-center w-full h-full rounded-full"
      />
    </div>
    <div class="flex flex-col space-y-4">
      <div>
        <h2 class="text-2xl font-semibold text-primary">{{ barber.name }}</h2>
      </div>
      <div class="space-y-1">
        <span class="flex items-center space-x-2">
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            class="text-primary"
          />
          <span class="text-primary">{{ barber.email }}</span>
        </span>
        <span class="flex items-center space-x-2">
          <font-awesome-icon
            icon="fa-solid fa-phone"
            class="text-primary"
          />
          <span class="text-primary">{{ barber.phone }}</span>
        </span>
      </div>
      <div class="flex items-center justify-around">
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
    </div>
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
