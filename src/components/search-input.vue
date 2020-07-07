<template>
  <div class="search-input">
    <input type="text" /><i class="fa fa-search" aria-hidden="true"></i>
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
  top: 7px;
  right: 8px;
  color: #444;
  cursor: pointer;
}
</style>
