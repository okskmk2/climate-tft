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
      <li v-for="qna in qnaList">
        <div>
          <div class="title">
            <router-link to="/QnADetail">{{ qna.title }}</router-link>
          </div>
          <div class="peek">{{ qna.content }}</div>
          <div class="tags">#심리학</div>
        </div>
        <span class="meta">
          <span>{{ qna.regDate }}</span>
          <span class="author">{{ qna.author }}</span>
        </span>
      </li>
      <li>
        <div>
          <div class="title">
            <router-link to="/QnADetail"
              >사람들이 불편한 진실을 받아드리고 용기를 가지고 해결하게 하려면
              어떻게 해야할까요?</router-link
            >
          </div>
          <div class="peek">내용</div>
          <div class="tags">#심리학</div>
        </div>
        <span class="meta">
          <span>2020-07-02</span>
          <span class="author">이순신</span>
        </span>
      </li>
      <li>
        <div>
          <div class="title">
            <router-link to="/QnADetail"
              >기업에게 GWP지수에 따른 생산규제 법률이 현재 어떤 것들이
              있나요?</router-link
            >
          </div>
          <div class="peek">내용</div>
          <div class="tags">#법률</div>
        </div>
        <span class="meta">
          <span>2020-07-02</span>
          <span class="author">정도전</span>
        </span>
      </li>
      <li>
        <div>
          <div class="title">
            <router-link to="/QnADetail"
              >오염된 하천을 어떻게 정화하나요?</router-link
            >
          </div>
          <div class="peek">내용</div>
          <div class="tags">#자연과학</div>
        </div>
        <span class="meta">
          <span>2020-07-02</span>
          <span class="author">연개소문</span>
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
      qnaList: [],
    };
  },
  components: {
    SearchInput,
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
        .then((querySnapshot) => {
          let qnaList = [];
          querySnapshot.forEach((doc) =>
            qnaList.push({ id: doc.id, ...doc.data() })
          );
          this.qnaList = qnaList;
        });
    },
  },
};
</script>

<style></style>
