<template>
  <div class="medium-container">
    <h1>질문하기</h1>
    <form @submit="addQnA">
      <div class="field">
        <label>질문제목 <span class="mandatory">*</span></label>
        <input type="text" v-model="qna.title" required />
        <div class="input-error"></div>
      </div>
      <div class="field">
        <label>질문내용 <span class="mandatory">*</span></label>
        <textarea class="content" v-model="qna.content" required></textarea>
        <div class="input-error"></div>
      </div>
      <div class="btn-group">
        <button>질문하기</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { now } from "../utils";

export default {
  data() {
    return {
      qna: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    addQnA() {
      firebase
        .firestore()
        .collection("qna")
        .doc()
        .set({
          title: this.qna.title,
          content: this.qna.content,
          author: this.$store.state.currentUser.email,
          regDate: now()
        })
        .then(() => {
          console.log(this.qna);
          this.qna = {};
          this.$router.push("/QnA");
        });
    }
  }
};
</script>

<style></style>
