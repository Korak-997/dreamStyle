<script>
import { useI18n } from "vue-i18n";
import Tr from "../i18n/translations";
export default {
  name: "UiSettings",
  setup() {
    const { t, locale } = useI18n();
    const supportedLocales = Tr.supportedLocales;
    const switchLanguage = async (newLocale) => {
      await Tr.switchLanguage(newLocale);
    };
    return { t, locale, supportedLocales, switchLanguage };
  },
  data() {
    const savedLocale = JSON.parse(localStorage.getItem("alphaSalon"));
    return {
      locale:
        savedLocale == null
          ? import.meta.env.VITE_DEFAULT_LOCALE
          : savedLocale.settings.locale,
    };
  },
  methods: {
    saveChanges(newLocale) {
      localStorage.setItem(
        "alphaSalon",
        JSON.stringify({ settings: { locale: newLocale } }),
      );

      this.$router.go("");
    },
  },
};
</script>

<template>
  <div class="dropdown dropdown-end text-center">
    <div
      tabindex="0"
      class="mx-4 hover:shadow-sm rounded-xl hover:shadow-primary hover:cursor-pointer"
    >
      <img
        :src="`/flags/${locale}.svg`"
        :alt="`Country flag for (${sLocale}) language`"
        class="w-8 rounded-xl"
        width="32px"
        height="32px"
      />
    </div>
    <ul
      tabindex="0"
      class="menu dropdown-content p-2 shadow bg-base-100 w-36 flex flex-col justify-around items-center"
    >
      <li
        class="w-full text-center border-b border-neutral hover:bg-accent"
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        @click="
          () => {
            switchLanguage(sLocale);
            saveChanges(sLocale);
          }
        "
      >
        <p
          :class="{
            'kurdish-font': sLocale == 'ku',
            'ar-fa-font': sLocale == 'ar' || sLocale == 'fa',
          }"
        >
          <img
            :src="`/flags/${sLocale}.svg`"
            alt="Country flag"
            class="w-6 rounded-xl"
            width="24px"
            height="24px"
          />
          {{ t(`locale.${sLocale}`) }}
        </p>
      </li>
    </ul>
  </div>
</template>
