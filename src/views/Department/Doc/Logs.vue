<template>
  <div>
    <header class="header3">
      <h3>회의록</h3>
      <div class="btn-group">
        <router-link
          :to="'/Department/' + $route.params.departmentId + '/Doc/LogForm'"
          v-if="$store.state.currentUser"
          class="a-btn"
          ><button>
            글쓰기
          </button></router-link
        >
      </div>
    </header>
    <ul class="article-container">
      <li v-for="log in logList" class="article-card">
        <div class="content">{{ log.content }}</div>
        <div class="author">작성자 : {{ log.author }}</div>
        <div class="regDt">작성일자 : {{ log.regDt }}</div>
        <button @click="deleteLog(log.id)" class="fas fa-trash"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      logList: [],
    };
  },
  mounted() {
    this.getLogs();
  },
  methods: {
    getLogs() {
      firebase
        .firestore()
        .collection(`department/${this.$route.params.departmentId}/log`)
        .get()
        .then((querySnapshot) => {
          let logList = [];
          querySnapshot.forEach((doc) =>
            logList.push({ id: doc.id, ...doc.data() })
          );
          this.logList = logList;
        });
    },
    openIssueForm() {
      this.$store.commit("openModal", IssueForm);
    },
    deleteLog(logId) {
      const rtn = confirm("정말로 삭제하시겠습니까?");
      if (rtn) {
        firebase
          .firestore()
          .doc(`department/${this.$route.params.departmentId}/log/${logId}`)
          .delete()
          .then(() => {
            this.getLogs();
          });
      }
    },
  },
};
</script>

<style></style>
