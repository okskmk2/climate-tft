<template>
  <div v-if="isIssueLoaded" style="position: relative;" class="issue-detail">
    <h3>
      <input type="text" v-model="issue.name" @change="updateIssue" />
    </h3>
    <div class="row">
      <section style="flex-grow: 1;">
        <div class="field">
          <label>내용</label>
          <textarea
            v-model="issue.description"
            @change="updateIssue"
            class="content"
          ></textarea>
        </div>
        <div>코멘트</div>
        <div>코멘트 영역</div>
      </section>
      <section class='meta-container'>
        <div class="meta-field">
          <label>상태</label>
          <select v-model="issue.status" @change="updateIssue">
            <option value="todo">할 일</option>
            <option value="inprogress">진행 중</option>
            <option value="review">검토</option>
            <option value="done">완료</option>
            <option value="closed">닫기</option>
          </select>
        </div>
        <div class="meta-field">
          <label>책임자</label>
          <select v-model="issue.assignee" @change="updateIssue">
            <option v-for="user in users" :value="user.email">
              {{ user.name }}
            </option>
          </select>
        </div>
        <div class="meta-field">
          <label style="margin-bottom: 4px;">기한</label>
          <input
            type="date"
            v-model="issue.dueDate"
            @change="updateIssue"
            style="padding: 2px 6px;"
          />
        </div>
      </section>
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
      users: [],
    };
  },
  mounted() {
    this.getIssues();
    this.getUsers();
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
    getUsers(context) {
      firebase
        .firestore()
        .collection("users")
        .get()
        .then((querySnapshot) => {
          let users = [];
          querySnapshot.forEach((doc) =>
            users.push({ id: doc.id, ...doc.data() })
          );
          this.users = users;
        });
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
