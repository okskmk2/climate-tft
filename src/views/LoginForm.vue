<template>
  <div class="narrow-container">
    <h1>로그인</h1>
    <form @submit.prevent>
      <div class="field">
        <label>아이디(이메일)</label>
        <input type="text" v-model="email" class='autofocus'/>
      </div>
      <div class="field">
        <label>비밀번호</label>
        <input type="password" v-model="password" />
      </div>
      <div class="footer-btn-group">
        <button @click="signIn">로그인</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted(){
    document.querySelector('.autofocus').focus();
  },
  methods: {
    signIn() {
      this.$store.dispatch("signIn", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
