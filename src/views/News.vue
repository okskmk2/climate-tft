<template>
  <div>
    <h1>뉴스</h1>
    <div class="top-btn-group">
      <SearchInput></SearchInput>
      <router-link to="/NewsForm"><button>글쓰기</button></router-link>
    </div>
    <ul class="news-container">
      <li>
        <div>
          <a
            href="https://news.naver.com/main/read.nhn?mode=LS2D&mid=shm&sid1=102&sid2=252&oid=001&aid=0011730759"
            target="_blank"
            >헝가리 "우크라이나·루마니아, 하천오염 중단하라"
            <i class="fa fa-external-link" aria-hidden="true"></i
          ></a>
          <div class="tags">#수질오염</div>
        </div>
        <span>
          <span>2020-07-02</span>
          <span class="reporter">정성원 기자</span>
        </span>
      </li>
      <li>
        <div>
          <a
            href="https://news.naver.com/main/read.nhn?mode=LS2D&mid=shm&sid1=102&sid2=252&oid=001&aid=0011730759"
            target="_blank"
            >헝가리 "우크라이나·루마니아, 하천오염 중단하라"
            <i class="fa fa-external-link" aria-hidden="true"></i
          ></a>
          <div class="tags">#수질오염</div>
        </div>
        <span>
          <span>2020-07-02</span>
          <span class="reporter">정성원 기자</span>
        </span>
      </li>
      <li>
        <div>
          <a
            href="https://news.naver.com/main/read.nhn?mode=LS2D&mid=shm&sid1=102&sid2=252&oid=001&aid=0011730759"
            target="_blank"
            >헝가리 "우크라이나·루마니아, 하천오염 중단하라"
            <i class="fa fa-external-link" aria-hidden="true"></i
          ></a>
          <div class="tags">#수질오염</div>
        </div>
        <span>
          <span>2020-07-02</span>
          <span class="reporter">정성원 기자</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchInput from "../components/search-input";
export default {
  components: {
    SearchInput,
  },
  mounted() {
    this.$store.commit("setTitle", "뉴스");
  },
};
</script>

<style></style>
