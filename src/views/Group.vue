<template>
  <div>
    <h1>연합단체들</h1>
    <div class="top-ctrl-group">
      <SearchInput></SearchInput>
      <button @click="openGroupForm" v-if="$store.state.currentUser">
        등록하기
      </button>
    </div>
    <ul class="card-container">
      <li v-for="group in groupList" :key="group.id">
        <div class="title">{{ group.name }}</div>
        <div class="card">
          <div class="desc">{{ group.description }}</div>
          <div class="tags">#정책 #법률 #정치</div>
          <table>
            <tr>
              <td>열린 이슈</td>
              <td>2</td>
            </tr>
            <tr>
              <td>진행 중인 이슈</td>
              <td>3</td>
            </tr>
          </table>

          <div class="footer-btn-group">
            <router-link class="a-btn" :to="'/Group/' + group.id"
              ><button>입장하기</button></router-link
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";

import SearchInput from "../components/search-input";
import GroupForm from "./Group/GroupForm";
export default {
  data() {
    return {
      groupList: []
    };
  },
  components: {
    SearchInput,
    GroupForm
  },
  computed: {
    reloadGroup() {
      return this.$store.state.reloadGroup;
    }
  },
  watch: {
    reloadGroup() {
      this.getGroup();
    }
  },
  mounted() {
    this.getGroup();
  },
  methods: {
    getGroup() {
      firebase
        .firestore()
        .collection("group")
        .get()
        .then(querySnapshot => {
          let groupList = [];
          querySnapshot.forEach(doc =>
            groupList.push({ id: doc.id, ...doc.data() })
          );
          this.groupList = groupList;
        });
    },
    openGroupForm() {
      this.$store.commit("openModal", GroupForm);
    }
  }
};
</script>

<style></style>
