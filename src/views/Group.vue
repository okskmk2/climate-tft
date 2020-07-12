<template>
  <div>
    <h1>연합단체들</h1>
    <div class="top-btn-group">
      <SearchInput></SearchInput>
      <router-link to="/GroupForm"><button>등록하기</button></router-link>
    </div>
    <ul class="card-container">
      <li v-for="group in groupList">
        <div class="title">{{ group.name }}</div>
        <div class="card">
          <div class="desc">{{ group.description }}</div>
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
            <router-link :to="'/Group/' + group.id"
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
export default {
  data() {
    return {
      groupList: [],
    };
  },
  components: {
    SearchInput,
  },
  mounted() {
    this.getGroup();
  },
  methods: {
    getGroup() {
      firebase
        .firestore()
        .collection(`group`)
        .get()
        .then((querySnapshot) => {
          let groupList = [];
          querySnapshot.forEach((doc) =>
            groupList.push({ id: doc.id, ...doc.data() })
          );
          this.groupList = groupList;
        });
    },
  },
};
</script>

<style></style>
