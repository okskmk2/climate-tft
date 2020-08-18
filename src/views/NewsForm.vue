<template>
  <div class="medium-container">
    <h1>뉴스 쓰기</h1>
    <form @submit="shareNews">
      <div class="field">
        <label style="display: inline-block;"
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
        <input type="text" v-model="title" required />
      </div>
      <div v-if="isLinkNews" class="field">
        <label>링크 <span class="mandatory">*</span></label>
        <textarea v-model="linkUrl"></textarea>
      </div>
      <div v-if="!isLinkNews" class="field">
        <label>내용 <span class="mandatory">*</span></label>
        <textarea class="content" v-model="content"></textarea>
      </div>
      <div class="footer-btn-group">
        <button v-if="">
          {{ isLinkNews ? "공유하기" : "글쓰기" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      isLinkNews: true,
      title: "",
      linkUrl: "",
      content: "",
    };
  },
  methods: {
    shareNews() {
      let groupRef = firebase.firestore().collection("news");
      groupRef
        .doc()
        .set({
          isLinkNews: this.isLinkNews,
          title: this.title,
          linkUrl: this.linkUrl,
          content: this.content,
        })
        .then(() => {
          this.$router.push("/News");
        });
    },
  },
};
</script>

<style></style>
