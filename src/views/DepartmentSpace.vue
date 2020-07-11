<template>
  <div>
    <h2>문서 정리부</h2>
  </div>
</template>

<script>
export default {
  mounted(){
      this.$store.commit('setTitle', "문서정리부");
  }
}
</script>

<style>

</style>