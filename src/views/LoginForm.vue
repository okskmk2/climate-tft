<template>
  <div>
    <form
      @submit="signIn"
      style="border-radius: 4px;
    padding: 3rem 3rem;
    margin: 3rem auto;
    border: 1px solid var(--borderColor3);
    max-width: 20rem;"
    >
      <h1 style="margin:0 0 3rem">로그인</h1>
      <div class="field">
        <label>아이디(이메일)</label>
        <input type="email" v-model="email" class="autofocus" required />
      </div>
      <div class="field">
        <label>비밀번호</label>
        <input type="password" v-model="password" required />
      </div>
      <div class="footer-btn-group">
        <button>로그인</button>
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
  mounted() {
    document.querySelector(".autofocus").focus();
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
