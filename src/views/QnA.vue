<template>
  <div>
    <h1>질문과 답변</h1>
    <div class="top-ctrl-group">
      <SearchInput></SearchInput>
      <router-link to="/QnAForm" class="a-btn"
        ><button>질문하기</button></router-link
      >
    </div>
    <ul class="qna-container">
      <li v-for="qna in qnaList" v-bind:key="qna.id">
        <div>
          <div class="title">
            <router-link :to="'/QnA/' + qna.id">{{ qna.title }}</router-link>
          </div>
          <div class="peek">{{ qna.content }}</div>
          <div class="tags">#심리학</div>
        </div>
        <span class="meta">
          <span>{{ qna.regDate }}</span>
          <span class="author">{{ qna.author }}</span>
        </span>
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
      qnaList: []
    };
  },
  components: {
    SearchInput
  },
  mounted() {
    this.getQnAList();
  },
  methods: {
    getQnAList() {
      firebase
        .firestore()
        .collection("qna")
        .get()
        .then(querySnapshot => {
          let qnaList = [];
          querySnapshot.forEach(doc =>
            qnaList.push({ id: doc.id, ...doc.data() })
          );
          this.qnaList = qnaList;
        });
    }
  }
};
</script>

<style></style>
