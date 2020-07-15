<template>
  <div>
    <h2>{{ group.name }}</h2>
    <nav class="space-gnb">
      <div>
        <router-link :to="`/Group/${$route.params.groupId}/Doc`"
          >문서</router-link
        >
        |
        <router-link :to="`/Group/${$route.params.groupId}/Issue`"
          >이슈</router-link
        >
      </div>
      <div>
        <router-link :to="`/Group/${$route.params.groupId}/Settings`"
          >설정</router-link
        >
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import firebase from "firebase";

export default {
  computed: mapState(["group"]),
  mounted() {
    this.$store.dispatch("getGroupById", this.$route.params.groupId);
  },
};
</script>

<style></style>
