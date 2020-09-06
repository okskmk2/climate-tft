<template>
  <div class="reply-content" v-if="!isEditing">
    <div>
      <strong>{{ reply.author }}</strong>
      {{ reply.regDate }}
    </div>
    <div>{{ reply.content }}</div>
    <div class="btn-group">
      <button
        class="fas fa-pen"
        style="margin: 0;"
        @click="() => (this.isEditing = !isEditing)"
        v-show="this.$store.state.currentUser.email === reply.author"
      ></button>
      <button
        @click="deleteReply(reply.id)"
        class="fas fa-trash"
        v-show="this.$store.state.currentUser.email === reply.author"
      ></button>
    </div>
  </div>
  <div class="reply-content" v-else>
    <div>
      <strong>{{ reply.author }}</strong>
      {{ reply.regDate }}
    </div>
    <Editor
      v-model="replyContent"
      class="reply-content"
      style="margin-top: 0;"
    ></Editor>
    <div class="btn-group">
      <button @click="cancelUpdateReply">취소</button>
      <button @click="updateReply(reply.id)">수정하기</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Editor from "./Editor";
import { nowDttm } from "../utils";

export default {
  data() {
    return {
      isEditing: false,
      replyContent: this.reply.content
    };
  },
  props: {
    reply: {
      author: String,
      content: String,
      id: String,
      regDate: String
    }
  },
  methods: {
    deleteReply(replyId) {
      const rtn = confirm("정말로 삭제하시겠습니까?");
      if (rtn) {
        firebase
          .firestore()
          .doc(
            `department/${this.$route.params.departmentId}/issue/${this.$route.params.issueId}/reply/${replyId}`
          )
          .delete()
          .then(() => {
            this.$emit("getReplyList");
          });
      }
    },
    updateReply(replyId) {
      if (this.replyContent !== "") {
        firebase
          .firestore()
          .doc(
            `department/${this.$route.params.departmentId}/issue/${this.$route.params.issueId}/reply/${replyId}`
          )
          .set({
            content: this.replyContent,
            author: this.$store.state.currentUser.email,
            regDate: nowDttm()
          })
          .then(() => {
            this.isEditing = false;
            // this.replyContent = "";
            this.$emit("getReplyList");
          });
      }
    },
    cancelUpdateReply() {
      this.isEditing = false;
      this.replyContent = this.reply.content;
    }
  },
  components: {
    Editor
  }
};
</script>

<style></style>