<template>
  <div class="medium-container">
    <h1>{{ news.title }}</h1>
    <pre>{{ news.content }}</pre>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return { news: {} };
  },
  mounted() {
    this.getIssue();
  },
  methods: {
    getIssue() {
      firebase
        .firestore()
        .doc(`news/${this.$route.params.newsId}`)
        .get()
        .then((doc) => {
          this.news = { id: doc.id, ...doc.data() };
        });
    },
  },
};
</script>

<style></style>
