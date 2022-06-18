<template>
  <div>
    <form
      @submit.prevent
      style="border-radius: 4px;
    padding: 3rem 3rem;
    margin: 3rem auto;
    border: 1px solid var(--borderColor3);
    max-width: 20rem;"
    >
      <h1 style="margin:0 0 3rem">회원가입</h1>
      <div class="field">
        <label>이름</label>
        <input type="text" v-model="name" />
        <div class="input-error"></div>
      </div>
      <div class="field">
        <label>이메일</label>
        <input type="text" v-model="email" />
        <div class="input-error"></div>
      </div>
      <div class="field">
        <label>비밀번호</label>
        <input type="password" v-model="password" />
        <div class="input-error"></div>
      </div>
      <div class="field">
        <label>비밀번호확인</label>
        <input type="password" />
        <div class="input-error"></div>
      </div>
      <div class="btn-group">
        <button @click="signUp">가입하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      this.$store.dispatch("signUp", {
        name: this.name,
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style></style>
