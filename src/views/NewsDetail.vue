<template>
  <div class="medium-container">
    <h1>{{ news.title }}</h1>
    <pre>{{ news.content }}</pre>
    <div class="top-ctrl-group">
      <button @click="deleteNews" class="icon-btn">
        <span class="fas fa-trash"></span>삭제
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return { news: {} };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
      firebase
        .firestore()
        .doc(`news/${this.$route.params.newsId}`)
        .get()
        .then(doc => {
          this.news = { id: doc.id, ...doc.data() };
        });
    },
    deleteNews() {
      const rtn = confirm("정말로 삭제하시겠습니까?");
      if (rtn) {
        firebase
          .firestore()
          .doc(`news/${this.$route.params.newsId}`)
          .delete()
          .then(() => {
            // this.$store.dispatch("snackbar", "삭제되었습니다.");
            this.$router.push("/News");
          });
      }
    }
  }
};
</script>

<style></style>
