<template>
  <div>
    <h1>뉴스</h1>
    <div class="top-ctrl-group">
      <SearchInput></SearchInput>
      <router-link to="/NewsForm" v-if="$store.state.currentUser" class="a-btn"
        ><button>글쓰기</button></router-link
      >
    </div>
    <ul class="news-container">
      <li v-for="news in newsList" v-bind:key="news.id">
        <div>
          <a v-if="news.isLinkNews" :href="news.linkUrl" target="_blank"
            >{{ news.title }}
            <i class="fas fa-external-link-alt" aria-hidden="true"></i
          ></a>
          <router-link v-if="!news.isLinkNews" :to="'/News/' + news.id">
            {{ news.title }}
          </router-link>
          <!-- <div class="tags">#수질오염</div> -->
        </div>
        <span>
          <span>2020-07-02</span>
          <span class="reporter" v-if="news.reporter"
            >{{ news.reporter }} 기자</span
          >
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
      newsList: []
    };
  },
  mounted() {
    this.getGroup();
  },
  methods: {
    getGroup() {
      firebase
        .firestore()
        .collection("news")
        .get()
        .then(querySnapshot => {
          let newsList = [];
          querySnapshot.forEach(doc =>
            newsList.push({ id: doc.id, ...doc.data() })
          );
          this.newsList = newsList;
        });
    }
  },
  components: {
    SearchInput
  }
};
</script>

<style></style>
