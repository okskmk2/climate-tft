<template>
  <div>
    <h1>회사</h1>
    <div class="top-ctrl-group">
      <SearchInput></SearchInput>
      <router-link to="/CorpForm" v-if="$store.state.currentUser" class="a-btn"
        ><button>등록하기</button></router-link
      >
    </div>
    <ul class="card-container">
      <li v-for="corp in corpList" v-bind:key="corp.id">
        <div class="title">{{ corp.name }}</div>
        <div class="card">
          <div class="desc">{{ corp.description }}</div>
          <div class="footer-btn-group">
            <router-link class="a-btn" :to="'/Corporation/' + corp.id"
              ><button>자세히 보기</button></router-link
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
export default {
  data() {
    return {
      corpList: []
    };
  },
  components: {
    SearchInput
  },
  mounted() {
    this.getCorpList();
  },
  methods: {
    getCorpList() {
      firebase
        .firestore()
        .collection("corp")
        .get()
        .then(querySnapshot => {
          let corpList = [];
          querySnapshot.forEach(doc =>
            corpList.push({ id: doc.id, ...doc.data() })
          );
          this.corpList = corpList;
        });
    }
  }
};
</script>

<style></style>
