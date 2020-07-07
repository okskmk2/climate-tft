<template>
  <div class="app">
    <header>
      <div class="header-inner container">
        <div class="brand-text">
          <router-link to="/">
            {{ $t("brand") }}
          </router-link>
        </div>
        <div class="menu">
          <gnb></gnb>
          <div class="unb">
            <router-link to="/Sponsor"><span>후원하기</span></router-link>
            <a><span>회원가입</span></a>
            <a><span>로그인</span></a>
            <i18nChanger></i18nChanger>
          </div>
        </div>
      </div>
    </header>
    <router-view class="container main" />
    <footer>
      <div class="container">
        <i class="fa fa-facebook-official fa-fw" aria-hidden="true"></i>
        <i class="fa fa-instagram fa-fw" aria-hidden="true"></i>
      </div>
    </footer>
  </div>
</template>

<i18n>
ko:
  brand: 기후위기TFT
</i18n>

<script>
import i18nChanger from "../components/i18n-changer";
import gnb from "../components/gnb";

export default {
  name: "app",
  data() {
    return {
      modalOpen: false,
    };
  },
  components: { i18nChanger, gnb },
};
</script>
