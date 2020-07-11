<template>
  <div :class="{ turnOff: $store.state.isTurnOff }">
    <keep-alive>
      <component
        v-bind:is="$store.state.modalInnerComponent"
        @close="$store.commit('turnOn')"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
