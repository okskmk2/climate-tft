<template>
  <div>
    <div
      style="
        width: 35rem;
        margin: 60px auto;
        border-radius: 8px;
        background-color: white;
        padding: 30px 44px 39px;
      "
    >
      <div style="text-align: right;">
        <i
          class="fa fa-times clickable"
          @click="$store.commit('closeModal')"
        ></i>
      </div>
      <h3>이슈 만들기</h3>
      <div class="field-row">
        <label>이슈명</label>
        <input type="text" v-model="issue.name" />
      </div>
      <div class="field-row">
        <label>내용</label>
        <textarea style="height: 20rem;" v-model="issue.description"></textarea>
      </div>
      <div class="field-row">
        <label>책임자</label>
        <input type="text" v-model="issue.assignee" />
      </div>
      <div class="field-row">
        <label>기한</label>
        <input type="text" v-model="issue.dueDate" />
      </div>
      <div class="footer-btn-group">
        <button @click="addIssue">만들기</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      issue: {
        name: "",
        description: "",
        assignee: "",
        dueDate: "",
      },
    };
  },
  methods: {
    addIssue() {
      firebase
        .firestore()
        .collection("group")
        .doc(this.$route.params.groupId)
        .collection("issue")
        .doc()
        .set({
          name: this.issue.name,
          description: this.issue.description,
          assignee: this.issue.assignee,
          dueDate: this.issue.dueDate,
          status: "todo",
        })
        .then(() => {
          this.$store.commit("closeModal");
          this.issue = {};
          this.$store.commit("toggleReloadIssueBoard");
        });
    },
  },
};
</script>

<style></style>
