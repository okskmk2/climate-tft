<template>
  <div class="app">
    <Modal></Modal>
    <header class="app-header">
      <div class="header-inner" :class="containerType">
        <div class="brand-text">
          <router-link to="/">
            {{ $t("brand") }}
          </router-link>
        </div>
        <div class="menu">
          <gnb></gnb>
          <div class="unb">
            <!-- <router-link to="/Sponsor"><span>후원하기</span></router-link> -->
            <router-link to="/SignUpForm" v-if="!$store.state.currentUser"
              ><span>회원가입</span></router-link
            ><router-link to="/LoginForm" v-if="!$store.state.currentUser"
              ><span>로그인</span></router-link
            ><a
              v-if="$store.state.currentUser"
              @click="signOut"
              style="cursor: pointer;"
              ><span>로그아웃</span></a
            >
            <!-- <a
              v-if="$store.state.currentUser"
              style="cursor: pointer;"
              ><span>나의 공간</span></a
            > -->
            <router-link to="/Settings"><span>설정</span></router-link>
            <i18nChanger></i18nChanger>
          </div>
        </div>
      </div>
    </header>
    <router-view class="main" :class="containerType" />
    <footer>
      <div class="footer-inner" :class="containerType">
        <router-link to="/Sponsor"><span>후원하기</span></router-link>
        <!-- <i class="fa fa-lg fa-facebook-official fa-fw" aria-hidden="true"></i>
        <i class="fa fa-lg fa-instagram fa-fw" aria-hidden="true"></i> -->
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
import Modal from "../components/Modal";

export default {
  name: "app",
  data() {
    return {
      modalOpen: false,
    };
  },
  computed: {
    containerType() {
      switch (this.$store.state.containerType) {
        case "normal":
          return "container";
        case "full":
          return "full-container";
        default:
          return "container";
      }
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
    },
  },
  components: { i18nChanger, gnb, Modal },
};
</script>
