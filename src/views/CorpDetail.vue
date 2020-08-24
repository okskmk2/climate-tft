<template>
  <div class="medium-container">
    <h1>{{ corp.name }}</h1>
    <pre>{{ corp.description }}</pre>
    <div class="top-ctrl-group">
      <button @click="deleteCorp" class="icon-btn">
        <span class="fas fa-trash"></span>삭제
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      corp: {
        name: "",
        description: "",
      },
    };
  },
  mounted() {
    this.getCorp();
  },
  methods: {
    getCorp() {
      firebase
        .firestore()
        .doc(`corp/${this.$route.params.corpId}`)
        .get()
        .then((doc) => {
          this.corp = { id: doc.id, ...doc.data() };
        });
    },
    deleteCorp() {
      const rtn = confirm("정말로 삭제하시겠습니까?");
      if (rtn) {
        firebase
          .firestore()
          .doc(`corp/${this.$route.params.corpId}`)
          .delete()
          .then(() => {
            this.$router.push("/Corporation");
          });
      }
    },
  },
};
</script>

<style></style>
