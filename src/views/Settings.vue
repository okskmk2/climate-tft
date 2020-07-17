<template>
  <div>
    <h1>설정</h1>
    <label>웹어플리케이션 너비</label>
    <select v-model="$store.state.containerType">
      <option value="full">full</option>
      <option value="normal">normal</option>
    </select>
  </div>
</template>

<script>
export default {

};
</script>

<style></style>
