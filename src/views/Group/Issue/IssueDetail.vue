<template>
  <div v-if="isIssueLoaded" style="position: relative;">
    <h3><input type="text" v-model="issue.name" @change="updateIssue" /></h3>
    <div>
      <p>
        기한 <input type="text" v-model="issue.dueDate" @change="updateIssue" />
      </p>
      <p>책임자 : {{ issue.assignee }}</p>
      <span class="row">
        <label>상태</label>
        <select v-model="issue.status" @change="updateIssue">
          <option value="todo">할 일</option>
          <option value="inprogress">진행중</option>
          <option value="review">리뷰</option>
          <option value="close">클로즈</option>
        </select>
      </span>
    </div>
    <div class="field-row">
      <label>내용</label>
      <textarea
        v-model="issue.description"
        @change="updateIssue"
        class="content"
      ></textarea>
    </div>
    <div>코멘트</div>
    <div>
      코멘트 영역
    </div>
    <Snackbar />
  </div>
</template>

<script>
import Snackbar from "../../../components/Snackbar";
import firebase from "firebase";

export default {
  data() {
    return {
      issue: {},
      isIssueLoaded: false,
      timeout: false,
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
    updateIssue() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      let self = this;
      this.timeout = setTimeout(() => {
        firebase
          .firestore()
          .doc(
            `group/${self.$route.params.groupId}/issue/${self.$route.params.issueId}`
          )
          .set({
            ...self.issue,
          })
          .then(() => {
            self.$store.dispatch("snackbar", "저장되었습니다.");
          });
      }, 1500);
    },
    openIssueForm() {
      this.$store.commit("setModalInnerComponent", IssueForm);
      this.$store.commit("turnOff");
    },
  },
  components: {
    Snackbar,
  },
};
</script>

<style></style>
