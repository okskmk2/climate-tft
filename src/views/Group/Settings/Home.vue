<template>
  <div>
    <h3>설정</h3>
    <div class="field">
      <label>공간명</label>
      <input type="text" v-model="group.name" />
    </div>
    <div class="field">
      <label>설명</label>
      <input type="text" v-model="group.description" />
    </div>
    <div class="field">
      <label>사이트 주소</label>
      <input type="text" v-model="group.site" />
    </div>
    <div class="footer-btn-group">
      <button @click="deleteGroup">삭제</button>
      <button @click="updateGroup">저장</button>
    </div>
    <Snackbar />
  </div>
</template>

<script>
import Snackbar from "../../../components/Snackbar";
import firebase from "firebase";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["group"]),
  },
  methods: {
    updateGroup() {
      this.$store.dispatch("updateGroup", this.group);
    },
    deleteGroup() {
      this.$store.dispatch("deleteGroup", this.group.id);
    },
  },
  components: {
    Snackbar,
  },
};
</script>
