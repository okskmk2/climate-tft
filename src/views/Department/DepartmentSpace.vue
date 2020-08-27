<template>
  <div>
    <header class="space-header">
      <h2 v-if="department">{{ department.name }}</h2>
      <div>
        <router-link
          :to="`/Department/${$route.params.departmentId}/Settings`"
          class="fas fa-cog"
        ></router-link>
      </div>
    </header>
    <nav class="space-gnb">
      <div>
        <router-link :to="`/Department/${$route.params.departmentId}/Doc`"
          >문서</router-link
        >
        |
        <router-link :to="`/Department/${$route.params.departmentId}/Issue`"
          >이슈</router-link
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
  computed: mapState(["department"]),
  mounted() {
    this.$store.dispatch("getDepartmentById", this.$route.params.departmentId);
  }
};
</script>

<style></style>
