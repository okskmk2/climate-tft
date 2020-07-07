<template>
  <div class="search-input">
    <input type="text" /><i class="material-icons">search</i>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
};
</script>

<style>
.search-input {
  position: relative;
}

.search-input > input {
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #aaa;
  outline: none;
}

.search-input > i {
  position: absolute;
  top: 6px;
  right: 6px;
  color: #444;
  cursor: pointer;
}
</style>
