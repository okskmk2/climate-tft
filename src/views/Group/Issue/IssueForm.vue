<template>
  <div>
    <div
      style="
        width: 35rem;
        margin: 60px auto;
        border-radius: 8px;
        background-color: white;
        padding: 30px 44px 39px;
      "
    >
      <div style="text-align: right;">
        <i
          class="fa fa-times clickable"
          @click="$store.commit('closeModal')"
        ></i>
      </div>
      <h3>이슈 만들기</h3>
      <div class="field-row">
        <label>이슈명</label>
        <input type="text" />
      </div>
      <div class="field-row">
        <label>내용</label>
        <textarea style="height:20rem"></textarea>
      </div>
      <div class="field-row">
        <label>책임자</label>
        <input type="text" />
      </div>
      <div class="field-row">
        <label>기한</label>
        <input type="text" />
      </div>
      <div class="footer-btn-group">
        <button>만들기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   mounted() {
  //     this.$store.commit("turnOff");
  //   },
  //   methods: {
  //     me() {
  //       this.$router.go(-1);
  //       this.$store.commit("turnOn");
  //     },
  //   },
};
</script>

<style></style>
