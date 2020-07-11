<template>
  <div>
    <h2>공지사항</h2>
      <div class='top-btn-group'>
        <button>글쓰기</button>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, soluta. Aut quis esse minima vero. At voluptatem alias possimus! Dignissimos voluptatem minima pariatur quaerat vitae numquam itaque tempore voluptatibus illum.</p>
      </div>
  </div>
</template>

<script>

export default {
  mounted(){
      this.$store.commit('setTitle', "가오클 공지사항");
  }
}
</script>

<style>

</style>