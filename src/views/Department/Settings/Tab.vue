<template>
  <div>
    <div class="space-container">
      <aside>
        <router-link
          :to="'/Department/' + $route.params.departmentId + '/Settings/Home'"
          >공간정보</router-link
        >
        <router-link
          :to="'/Department/' + $route.params.departmentId + '/Settings/Member'"
          >맴버관리</router-link
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
