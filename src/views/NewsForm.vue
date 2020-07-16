<template>
  <div class="medium-container">
    <h1>뉴스 쓰기</h1>
    <form>
      <div class="field">
        <label
          >링크뉴스입니까?
          <input
            type="checkbox"
            name="isLinkNews"
            v-model="isLinkNews"
            checked="true"
          />
        </label>
      </div>
      <div class="field">
        <label>기사제목 <span class="mandatory">*</span></label>
        <input type="text" />
      </div>
      <div v-if="isLinkNews" class="field">
        <label>링크 <span class="mandatory">*</span></label>
        <textarea></textarea>
      </div>
      <div v-if="!isLinkNews" class="field">
        <label>내용 <span class="mandatory">*</span></label>
        <textarea class="content"></textarea>
      </div>
      <div class="footer-btn-group">        
        <button v-if="isLinkNews">공유하기</button>
        <button v-if="!isLinkNews">글쓰기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLinkNews: true,
    };
  },
};
</script>

<style></style>
