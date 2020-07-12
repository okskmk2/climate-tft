<template>
  <div>
    <div class="space-container">
      <aside>
        <router-link
          :to="'/Group/' + $route.params.groupId + '/Issue/IssueBoard'"
          >이슈보드</router-link
        >
        <router-link :to="'/Group/' + $route.params.groupId + '/Issue/Logs'"
          >나에게 할당된 이슈</router-link
        >
        <router-link :to="'/Group/' + $route.params.groupId + '/Issue/Archive'"
          >제안 목록</router-link
        >
      </aside>
      <router-view class="space-main-container"></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
