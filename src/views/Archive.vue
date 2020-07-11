<template>
  <div>
    <h1>자료실</h1>
    <div class="top-btn-group">
      <SearchInput></SearchInput>
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/search-input";
export default {
  components: {
    SearchInput,
  },
    mounted(){
      this.$store.commit('setTitle', "자료실");
  }
};
</script>

<style></style>
