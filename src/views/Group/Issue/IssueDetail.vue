<template>
  <div v-if="isIssueLoaded">
    <h3>{{ issue.name }}</h3>
    <div>
      <p>기한 : {{ issue.dueDate }}</p>
      <p>책임자 : {{ issue.assignee }}</p>
    </div>
    <label>내용</label>
    <div>{{ issue.description }}</div>
    <div>코멘트</div>
    <div>
      코멘트 영역
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      issue: {},
      isIssueLoaded: false,
    };
  },
  mounted() {
    this.getIssues();
  },
  methods: {
    getIssues() {
      firebase
        .firestore()
        .doc(
          `group/${this.$route.params.groupId}/issue/${this.$route.params.issueId}`
        )
        .get()
        .then((doc) => {
          this.issue = { id: doc.id, ...doc.data() };
          this.isIssueLoaded = true;
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
