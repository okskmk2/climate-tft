<template>
  <div class="medium-container">
    <h1>회사 등록</h1>
    <form @submit="AddCorp">
      <div class="field">
        <label>회사명 <span class="mandatory">*</span></label>
        <input type="text" v-model="name" required />
      </div>
      <div class="field">
        <label>내용 <span class="mandatory">*</span></label>
        <textarea class="content" v-model="description"></textarea>
      </div>
      <div class="footer-btn-group">
        <button>등록하기</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    AddCorp() {
      firebase
        .firestore()
        .collection("corp")
        .doc()
        .set({
          name: this.name,
          description: this.description,
        })
        .then(() => {
          this.$router.push("/Corporation");
        });
    },
  },
};
</script>

<style></style>
