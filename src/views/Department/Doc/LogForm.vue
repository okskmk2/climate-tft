<template>
  <div class="medium-container">
    <h1>회의록 작성</h1>
    <form @submit="shareNews">
      <div class="field">
        <label>내용 <span class="mandatory">*</span></label>
        <textarea class="content" v-model="content"></textarea>
      </div>
      <div class="footer-btn-group">
        <button>글쓰기</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { now } from "../../../utils";
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    shareNews() {
      firebase
        .firestore()
        .collection(`department/${this.$route.params.departmentId}/log`)
        .doc()
        .set({
          content: this.content,
          author: this.$store.state.currentUser.email,
          regDt: now(),
        })
        .then(() => {
          this.$router.push(
            "/Department/" + this.$route.params.departmentId + "/Doc/Logs"
          );
        });
    },
  },
};
</script>

<style></style>
