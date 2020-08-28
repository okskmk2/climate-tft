<template>
  <div>
    <header class="space-header">
      <h2 v-if="group">{{ group.name }}</h2>
      <div>
        <router-link
          :to="`/Group/${$route.params.groupId}/Settings`"
          class="fas fa-cog"
        ></router-link>
      </div>
    </header>
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
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import firebase from "firebase";

export default {
  computed: mapState(["group"]),
  mounted() {
    this.$store.dispatch("getGroupById", this.$route.params.groupId);
  }
};
</script>

<style></style>
