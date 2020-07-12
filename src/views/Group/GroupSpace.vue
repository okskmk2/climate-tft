<template>
  <div>
    <h2>{{ groupName }}</h2>
    <nav style="margin-top: 20px;">
      <router-link :to="`/Group/${$route.params.groupId}/Doc`"
        >문서</router-link
      >
      |
      <router-link :to="`/Group/${$route.params.groupId}/Issue`"
        >이슈</router-link
      >
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      groupName: "",
      groupDesc: "",
    };
  },
  mounted() {
    firebase
      .firestore()
      .collection("group")
      .doc(this.$route.params.groupId)
      .get()
      .then((doc) => {
        this.groupName = doc.data().name;
      });
  },
};
</script>

<style></style>
