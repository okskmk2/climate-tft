<template>
  <div class="narrow-container">
    <h1>로그인</h1>
    <div>
      <div class="field-row">
        <label>아이디(이메일)</label>
        <input type="text" v-model="email" />
      </div>
      <div class="field-row">
        <label>비밀번호</label>
        <input type="password" v-model="password" />
      </div>
      <div class="footer-btn-group">
        <button @click="signIn">로그인</button>
      </div>
    </div>
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
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
          // this.$store.dispatch(
          //   "setCurrentUser",
          //   firebase.auth().currentUser.email
          // );
          // setTimeout(() => {
          //   this.$router.push({ path: "myspace" });
          // }, 0);
          this.$router.go(-1);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style></style>
