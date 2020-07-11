<template>
  <div class="narrow-container">
    <h1>단체 만들기</h1>
    <form>
      <div class="field-row">
        <label>단체명 <span class="mandatory">*</span></label>
        <input type="text" />
        <div class="input-error"></div>
      </div>
      <div class="field-row">
        <label>홈페이지 <span class="optional">(선택)</span></label>
        <input type="text" />
        <div class="input-error"></div>
      </div>
      <div class='footer-btn-group'>
        <button>등록하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    mounted(){
      this.$store.commit('setTitle', "단체 만들기");
  }
};
</script>

<style></style>
