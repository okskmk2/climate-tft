<template>
  <div>
    <h2>이슈보드</h2>
    <div class="top-btn-group">
      <button @click="openIssueForm()">만들기</button>
    </div>
    <div class="board-container">
      <section>
        <div>할 일</div>
        <ul>
          <li><router-link to="/Group/Space/Issue/1">이슈1</router-link></li>
          <li>121</li>
          <li>121</li>
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
import IssueForm from "./IssueForm";
export default {
  mounted() {
    this.$store.commit("setTitle", "이슈보드");
  },
  methods: {
    openIssueForm() {
      this.$store.commit("setModalInnerComponent", IssueForm);
      this.$store.commit("turnOff");
    },
  },
};
</script>

<style></style>
