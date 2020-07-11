<template>
  <div>
    <h2>가오클</h2>
    <nav style="margin-top: 20px;">
      <router-link to="/Group/Space/Doc">문서</router-link> | 
      <router-link to="/Group/Space/Issue">이슈</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
