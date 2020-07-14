<template>
  <div class='snackbar' :class="{ 'snackbar-up': $store.state.isSnackbarUp}">
    {{$store.state.snackbarText}}
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>