<template>
  <div>
    <h3>이슈보드</h3>
    <div class="top-btn-group">
      <button @click="openIssueForm()">만들기</button>
    </div>
    <div class="board-container">
      <section>
        <h4>할 일</h4>
        <ul class="issue-ul">
          <li v-for="issue in todos" class="issue-card">
            <router-link
              :to="'/Group/' + $route.params.groupId + '/Issue/' + issue.id"
              >{{ issue.name || "제목없음" }}</router-link
            >
          </li>
        </ul>
      </section>
      <section>
        <h4>진행 중</h4>
        <ul class="issue-ul">
          <li v-for="issue in inprogresses" class="issue-card">
            <router-link
              :to="'/Group/' + $route.params.groupId + '/Issue/' + issue.id"
              >{{ issue.name || "제목없음" }}</router-link
            >
          </li>
        </ul>
      </section>
      <section>
        <h4>리뷰</h4>
        <ul class="issue-ul">
          <li v-for="issue in reviews" class="issue-card">
            <router-link
              :to="'/Group/' + $route.params.groupId + '/Issue/' + issue.id"
              >{{ issue.name || "제목없음" }}</router-link
            >
          </li>
        </ul>
      </section>
      <section>
        <h4>완료</h4>
        <ul class="issue-ul">
          <li v-for="issue in dones" class="issue-card">
            <router-link
              :to="'/Group/' + $route.params.groupId + '/Issue/' + issue.id"
              >{{ issue.name || "제목없음" }}</router-link
            >
          </li>
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
      todos: [],
      inprogresses: [],
      reviews: [],
      dones: [],
    };
  },
  computed: {
    reloadIssueBoard() {
      return this.$store.state.reloadIssueBoard;
    },
  },
  watch: {
    reloadIssueBoard() {
      this.getIssues();
    },
  },
  mounted() {
    this.getIssues();
  },
  methods: {
    getIssues() {
      firebase
        .firestore()
        .collection(`group/${this.$route.params.groupId}/issue`)
        .where("status", "in", ["todo", "inprogress", "review", "done"])
        .get()
        .then((querySnapshot) => {
          let issues = [];
          querySnapshot.forEach((doc) =>
            issues.push({ id: doc.id, ...doc.data() })
          );
          this.todos = issues.filter((v) => v.status === "todo");
          this.inprogresses = issues.filter((v) => v.status === "inprogress");
          this.reviews = issues.filter((v) => v.status === "review");
          this.dones = issues.filter((v) => v.status === "done");
        });
    },
    openIssueForm() {
      this.$store.commit("openModal", IssueForm);
    },
  },
};
</script>

<style></style>
