<template>
  <div class="medium-container">
    <h1>질문하기</h1>
    <form>
      <div class="field-row">
        <label>질문제목 <span class="mandatory">*</span></label>
        <input type="text" />
        <div class="input-error"></div>
      </div>
      <div class="field-row">
        <label>질문내용 <span class="mandatory">*</span></label>
        <textarea class='content'></textarea>
        <div class="input-error"></div>
      </div>
      <div class='footer-btn-group'>
        <button>질문하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>