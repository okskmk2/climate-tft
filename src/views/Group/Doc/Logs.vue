<template>
  <div>
      <ul>
        <li>알넝리</li>
        <li>알넝리</li>
        <li>알넝리</li>
        <li>알넝리</li>
      </ul>
  </div>
</template>

<script>
export default {
  mounted(){
      this.$store.commit('setTitle', "회의록");
  }
}
</script>

<style>

</style>