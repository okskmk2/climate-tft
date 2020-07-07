<template>
  <div>
    <h1>질문과 답변</h1>
    <div class="top-btn-group">
      <SearchInput></SearchInput>
      <button style="padding: 1px 17px;">질문하기</button>
    </div>
    <ul class="qna-container">
      <li>
        <div>
          <div class="title">사람들이 불편한 진실을 받아드리고 용기를 가지고 해결하게 하려면 어떻게 해야할까요?</div>
          <div class="peek">내용</div>
          <div class="tags">#심리학</div>
        </div>
        <span class='meta'>
          <span>2020-07-02</span>
          <span class="author">이순신</span>
        </span>
      </li>
      <li>
        <div>
          <div class="title">기업에게 GWP지수에 따른 생산규제 법률이 현재 어떤 것들이 있나요?</div>
          <div class="peek">내용</div>
          <div class="tags">#법률</div>
        </div>
        <span class='meta'>
          <span>2020-07-02</span>
          <span class="author">정도전</span>
        </span>
      </li>
      <li>
        <div>
          <div class="title">오염된 하천을 어떻게 정화하나요?</div>
          <div class="peek">내용</div>
          <div class="tags">#자연과학</div>
        </div>
        <span class='meta'>
          <span>2020-07-02</span>
          <span class="author">연개소문</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchInput from "../components/search-input";
export default {
  components: {
    SearchInput,
  },
};
</script>

<style></style>
