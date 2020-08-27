<template>
  <div>
    <h3>설정</h3>
    <div class="field">
      <label>공간명</label>
      <input type="text" v-model="department.name" />
    </div>
    <div class="field">
      <label>설명</label>
      <input type="text" v-model="department.description" />
    </div>
    <div class="footer-btn-group">
      <button @click="deleteDepartment">삭제</button>
      <button @click="updateDepartment">저장</button>
    </div>
    <Snackbar />
  </div>
</template>

<script>
import Snackbar from "../../../components/Snackbar";
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["department"])
  },
  methods: {
    updateDepartment() {
      this.$store.dispatch("updateDepartment", this.department);
    },
    deleteDepartment() {
      this.$store.dispatch("deleteDepartment", this.department.id);
    }
  },
  components: {
    Snackbar
  }
};
</script>
