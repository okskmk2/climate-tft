<template>
  <div class="modal-container">
    <div style="text-align: right;">
      <i class="fa fa-times clickable" @click="$store.commit('closeModal')"></i>
    </div>
    <h3>부서 만들기</h3>
    <form>
      <div class="field">
        <label>
          부서명
          <span class="mandatory">*</span>
        </label>
        <input type="text" v-model="name" />
        <div class="input-error"></div>
      </div>
      <div class="field">
        <label>
          설명
          <span class="mandatory">*</span>
        </label>
        <input type="text" v-model="description" />
        <div class="input-error"></div>
      </div>
      <div class="footer-btn-group">
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
    };
  },
  methods: {
    addGroup() {
      let groupRef = firebase.firestore().collection("department");
      groupRef
        .doc()
        .set({
          name: this.name,
          description: this.description,
        })
        .then(() => {
          this.$store.commit('closeModal');
          this.$store.commit("toggleReloadDepartment");
          // this.$router.push("/Department");
        });
    },
  },
};
</script>

<style></style>
