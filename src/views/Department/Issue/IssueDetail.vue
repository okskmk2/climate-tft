<template>
  <div style="position: relative;" class="issue-detail">
    <div style="flex-grow: 1;">
      <header class="header3">
        <h3>
          <input type="text" v-model="issue.name" />
        </h3>
      </header>
      <div class="issue-detail-container">
        <section style="flex-grow: 1;">
          <div class="field">
            <textarea
              class="content noborder"
              v-model="issue.description"
            ></textarea>
          </div>
          <ul class="reply-container">
            <li v-for="reply in replyList" :key="reply.id">
              <div class="reply-content">
                {{ reply.content }}
                {{ reply.author }}
                {{ reply.regDate }}
              </div>
              <div class="btn-group">
                <button
                  @click="deleteReply(reply.id)"
                  class="fas fa-trash"
                ></button>
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
        </section>
      </div>
    </div>
    <section class="meta-container">
      <div class="btn-group" style="margin-bottom: 24px;">
        <button @click="updateIssue" class="icon-btn">
          <span class="fas fa-save"></span>저장
        </button>
        <button @click="deleteIssue" class="icon-btn">
          <span class="fas fa-trash"></span>삭제
        </button>
      </div>
      <div class="meta-field">
        <label>상태</label>
        <select v-model="issue.status">
          <option value="todo">할 일</option>
          <option value="inprogress">진행 중</option>
          <option value="review">검토</option>
          <option value="done">완료</option>
          <option value="closed">닫기</option>
        </select>
      </div>
      <div class="meta-field">
        <label>담당자</label>
        <select v-model="issue.assignee">
          <option v-for="user in users" :value="user.email" :key="user.id">{{
            user.name
          }}</option>
        </select>
      </div>
      <div class="meta-field" v-if="issue.reporter">
        <label>보고자</label>
        <span>{{ issue.reporter }}</span>
      </div>
      <div class="meta-field">
        <label style="margin-bottom: 4px;">기한</label>
        <input type="date" v-model="issue.dueDate" style="padding: 2px 6px;" />
      </div>
    </section>

    <Snackbar />
  </div>
</template>

<script>
import Snackbar from "../../../components/Snackbar";
import Editor from "../../../components/Editor";
import firebase from "firebase";
import { nowDttm } from "../../../utils";

export default {
  data() {
    return {
      issue: {},
      users: [],
      replyList: [],
      isOpenReplyEditor: false,
      replyContent: ""
    };
  },
  mounted() {
    this.getIssue();
    this.getUsers();
    this.getReplyList();
  },
  methods: {
    getIssue() {
      firebase
        .firestore()
        .doc(
          `department/${this.$route.params.departmentId}/issue/${this.$route.params.issueId}`
        )
        .get()
        .then(doc => {
          this.issue = { id: doc.id, ...doc.data() };
        });
    },
    updateIssue() {
      firebase
        .firestore()
        .doc(
          `department/${this.$route.params.departmentId}/issue/${this.$route.params.issueId}`
        )
        .set({
          ...this.issue
        })
        .then(() => {
          this.$store.dispatch("snackbar", "저장되었습니다.");
        });
    },
    getUsers() {
      firebase
        .firestore()
        .collection("users")
        .get()
        .then(querySnapshot => {
          let users = [];
          querySnapshot.forEach(doc =>
            users.push({ id: doc.id, ...doc.data() })
          );
          this.users = users;
        });
    },
    deleteIssue() {
      const rtn = confirm("정말로 삭제하시겠습니까?");
      if (rtn) {
        firebase
          .firestore()
          .doc(
            `department/${this.$route.params.departmentId}/issue/${this.$route.params.issueId}`
          )
          .delete()
          .then(() => {
            // this.$store.dispatch("snackbar", "삭제되었습니다.");
            this.$router.push(
              `/Department/${this.$route.params.departmentId}/issue/IssueBoard`
            );
          });
      }
    },
    getReplyList() {
      firebase
        .firestore()
        .collection(
          `department/${this.$route.params.departmentId}/Issue/${this.$route.params.issueId}/reply`
        )
        .get()
        .then(querySnapshot => {
          let replyList = [];
          querySnapshot.forEach(doc =>
            replyList.push({ id: doc.id, ...doc.data() })
          );
          this.replyList = replyList;
        });
    },
    replyBtn() {
      if (this.replyContent !== "") {
        firebase
          .firestore()
          .collection(
            `department/${this.$route.params.departmentId}/Issue/${this.$route.params.issueId}/reply`
          )
          .doc()
          .set({
            content: this.replyContent,
            author: this.$store.state.currentUser.email,
            regDate: nowDttm()
          })
          .then(() => {
            this.replyContent = "";
            this.getReplyList();
          });
      }
      this.isOpenReplyEditor = !this.isOpenReplyEditor;
    },
    deleteReply(replyId) {
      const rtn = confirm("정말로 삭제하시겠습니까?");
      if (rtn) {
        firebase
          .firestore()
          .doc(
            `department/${this.$route.params.departmentId}/Issue/${this.$route.params.issueId}/reply/${replyId}`
          )
          .delete()
          .then(() => {
            this.getReplyList();
          });
      }
    },
    resetReply() {
      this.replyContent = "";
      this.isOpenReplyEditor = false;
    }
  },
  components: {
    Snackbar,
    Editor
  }
};
</script>

<style></style>
