<template>
  <div>
    <h3>이슈보드</h3>
    <div class="top-btn-group">
      <button @click="openIssueForm()">만들기</button>
    </div>
    <div class="board-container">
      <section>
        <div>할 일</div>
        <ul>
          <li v-for="issue in issues">
            <router-link
              :to="'/Group/' + $route.params.groupId + '/Issue/' + issue.id"
              >{{ issue.name }}</router-link
            >
          </li>
        </ul>
      </section>
      <section>
        <div>진행 중</div>
        <ul>
          <li>ㅁㄴㅇㅁ</li>
          <li>ㅁㄴㅇㅁ</li>
          <li>ㅁㄴㅇㅁ</li>
          <li>ㅁㄴㅇㅁ</li>
          <li>ㅁㄴㅇㅁ</li>
          <li>ㅁㄴㅇㅁ</li>
        </ul>
      </section>
      <section>
        <div>완료</div>
        <ul>
          <li>ㄴㄹ3</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import IssueForm from "./IssueForm";

export default {
  data() {
    return {
      issues: [],
    };
  },
  mounted() {
    this.getIssues();
  },
  methods: {
    getIssues() {
      firebase
        .firestore()
        .collection(`group/${this.$route.params.groupId}/issue`)
        .get()
        .then((querySnapshot) => {
          let issues = [];
          querySnapshot.forEach((doc) =>
            issues.push({ id: doc.id, ...doc.data() })
          );
          this.issues = issues;
        });
    },
    openIssueForm() {
      this.$store.commit("setModalInnerComponent", IssueForm);
      this.$store.commit("turnOff");
    },
  },
};
</script>

<style></style>
