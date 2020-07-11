<template>
  <div>
    <div class="space-container">
      <aside>
        <router-link to="/Group/Space/Doc/Notice">공지사항</router-link>
        <router-link to="/Group/Space/Doc/Logs">회의록</router-link>
        <router-link to="/Group/Space/Doc/Archive">자료실</router-link>
      </aside>
      <router-view class="space-main-container"></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
