<template>
  <div class="medium-container">
    <h1>{{ qna.title }}</h1>
    <pre>{{ qna.content }}</pre>
    <div class="top-ctrl-group">
      <button @click="deleteQnA" class="icon-btn">
        <span class="fas fa-trash"></span>삭제
      </button>
    </div>
    <ul class="reply-container">
      <li v-for="reply in replyList">
        <div class="reply-content">
          {{ reply.content }}
          {{ reply.author }}
          {{ reply.regDate }}
        </div>
        <div class="btn-group">
          <button @click="deleteReply(reply.id)" class="fas fa-trash"></button>
        </div>
      </li>
      <li>
        <Editor
          v-if="isOpenReplyEditor"
          v-model="replyContent"
          class="reply-content"
        ></Editor>
        <div class="btn-group">
          <button @click="resetReply">취소</button>
          <button @click="replyBtn">답변하기</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
import Editor from "../components/Editor";
import { nowDttm } from "../utils";

export default {
  components: {
    Editor
  },
  data() {
    return {
      qna: {},
      isOpenReplyEditor: false,
      replyContent: "",
      replyList: []
    };
  },
  mounted() {
    this.getQnA();
    this.getQnAReplyList();
  },
  methods: {
    replyBtn() {
      if (this.replyContent !== "") {
        firebase
          .firestore()
          .collection(`qna/${this.$route.params.qnaId}/reply`)
          .doc()
          .set({
            content: this.replyContent,
            author: this.$store.state.currentUser.email,
            regDate: nowDttm()
          })
          .then(() => {
            this.replyContent = "";
            this.getQnAReplyList();
          });
      }
      this.isOpenReplyEditor = !this.isOpenReplyEditor;
    },
    deleteReply(replyId) {
      const rtn = confirm("정말로 삭제하시겠습니까?");
      if (rtn) {
        firebase
          .firestore()
          .doc(`qna/${this.$route.params.qnaId}/reply/${replyId}`)
          .delete()
          .then(() => {
            this.getQnAReplyList();
          });
      }
    },
    resetReply() {
      this.replyContent = "";
      this.isOpenReplyEditor = false;
    },
    getQnA() {
      firebase
        .firestore()
        .doc(`qna/${this.$route.params.qnaId}`)
        .get()
        .then(doc => {
          this.qna = { id: doc.id, ...doc.data() };
        });
    },
    getQnAReplyList() {
      firebase
        .firestore()
        .collection(`qna/${this.$route.params.qnaId}/reply`)
        .get()
        .then(querySnapshot => {
          let replyList = [];
          querySnapshot.forEach(doc =>
            replyList.push({ id: doc.id, ...doc.data() })
          );
          this.replyList = replyList;
        });
    },
    deleteQnA() {
      const rtn = confirm("정말로 삭제하시겠습니까?");
      if (rtn) {
        firebase
          .firestore()
          .doc(`qna/${this.$route.params.qnaId}`)
          .delete()
          .then(() => {
            // this.$store.dispatch("snackbar", "삭제되었습니다.");
            this.$router.push("/QnA");
          });
      }
    }
  }
};
</script>

<style></style>
