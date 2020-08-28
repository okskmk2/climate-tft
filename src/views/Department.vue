<template>
  <div>
    <h1>부서들</h1>
    <div class="top-ctrl-group">
      <SearchInput></SearchInput>
      <button @click="openDepartmentForm" v-if="$store.state.currentUser">
        등록하기
      </button>
    </div>
    <ul class="card-container">
      <li v-for="department in departmentList">
        <div class="title">{{ department.name }}</div>
        <div class="card">
          <div class="desc">{{ department.description }}</div>
          <div>
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
          </div>
          <div class="footer-btn-group">
            <router-link class="a-btn" :to="'/Department/' + department.id">
              <button>입장하기</button>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
import SearchInput from "../components/search-input";
import DepartmentForm from "./Department/DepartmentForm";
export default {
  data() {
    return {
      departmentList: []
    };
  },
  components: {
    SearchInput,
    DepartmentForm
  },
  computed: {
    reloadDepartment() {
      return this.$store.state.reloadDepartment;
    }
  },
  watch: {
    reloadDepartment() {
      this.getDepartment();
    }
  },
  mounted() {
    this.getDepartment();
  },
  methods: {
    getDepartment() {
      firebase
        .firestore()
        .collection("department")
        .get()
        .then(querySnapshot => {
          let departmentList = [];
          querySnapshot.forEach(doc =>
            departmentList.push({ id: doc.id, ...doc.data() })
          );
          this.departmentList = departmentList;
        });
    },
    openDepartmentForm() {
      this.$store.commit("openModal", DepartmentForm);
    }
  }
};
</script>

<style></style>
