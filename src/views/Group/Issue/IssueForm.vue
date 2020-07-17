<template>
  <div class="modal-container">
    <div style="text-align: right;">
      <i class="fa fa-times clickable" @click="$store.commit('closeModal')"></i>
    </div>
    <h3>이슈 만들기</h3>
    <div class="field">
      <label>이슈명</label>
      <input type="text" v-model="issue.name" />
    </div>
    <div class="field">
      <label>내용</label>
      <div ref="editorjsIssueForm"></div>
    </div>
    <div class="field">
      <label>책임자</label>
      <input type="text" v-model="issue.assignee" />
    </div>
    <div class="field">
      <label>기한</label>
      <input type="date" v-model="issue.dueDate" />
    </div>
    <div class="footer-btn-group">
      <button @click="addIssue">만들기</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

export default {
  data() {
    return {
      issue: {
        name: "",
        description: "",
        assignee: "",
        dueDate: "",
      },
      editor: null,
    };
  },
  mounted() {
    this.editor = new EditorJS({
      holder: this.$refs.editorjsIssueForm,
      minHeight:100,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
      },
    });
  },
  methods: {
    addIssue() {
      this.editor
        .save()
        .then((outputData) => {
          console.log(outputData);
          this.issue.description = outputData;
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
              reporter:this.$store.state.currentUser.email
            })
            .then(() => {
              this.$store.commit("closeModal");
              this.issue = {};
              this.$store.commit("toggleReloadIssueBoard");
            });
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    },
  },
};
</script>

<style></style>
