<template>
  <div class="modal-container">
    <div style="text-align: right;">
      <i class="fa fa-times clickable" @click="$store.commit('closeModal')"></i>
    </div>
    <h3>단체 만들기</h3>
    <form>
      <div class="field">
        <label>단체명 <span class="mandatory">*</span></label>
        <input type="text" v-model="name" />
        <div class="input-error"></div>
      </div>
      <div class="field">
        <label>설명 <span class="mandatory">*</span></label>
        <input type="text" v-model="description" />
        <div class="input-error"></div>
      </div>
      <div class="field">
        <label>홈페이지 <span class="optional">(선택)</span></label>
        <input type="text" v-model="site" />
        <div class="input-error"></div>
      </div>
      <div class="btn-group">
        <button @click="addGroup">등록하기</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      name: "",
      description: "",
      site: ""
    };
  },
  methods: {
    addGroup() {
      let groupRef = firebase.firestore().collection("group");
      groupRef
        .doc()
        .set({
          name: this.name,
          description: this.description,
          site: this.site
        })
        .then(() => {
          this.$store.commit("closeModal");
          this.$store.commit("toggleReloadGroup");
          // this.$router.push("/Group");
        });
    }
  }
};
</script>

<style></style>
