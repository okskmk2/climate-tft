<template>
  <span style="display: flex; align-items: center;">
    <i
      class="fa fa-globe fa-fw"
      aria-hidden="true"
      style="font-size: 21px; margin-right: 3px;"
    ></i>
    <select
      v-model="i18n.locale"
      @change="updateHtmlLang()"
      style="padding: 2px 4px; height: 29px; outline: none;"
    >
      <option
        v-for="lang in support_langs"
        :key="lang.locale"
        :value="lang.locale"
        >{{ lang.name }}</option
      >
    </select>
  </span>
</template>
<script>
import i18n from "../i18n";
export default {
  data() {
    return {
      i18n: i18n,
      support_langs: [
        { locale: "ko", name: "한국어" },
        { locale: "en", name: "English" },
      ],
    };
  },
  methods: {
    updateHtmlLang() {
      document.querySelector("html").setAttribute("lang", this.$i18n.locale);
    },
  },
};
</script>
