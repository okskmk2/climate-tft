<template>
  <div>
    <h1>중앙부서들</h1>
    <div class="top-btn-group">
      <SearchInput></SearchInput>
      <button style="padding: 1px 17px;">등록하기</button>
    </div>
    <ul class="card-container">
      <li>
        <div class="title">국회의원전담부</div>
        <div class="card">
          <div class="desc">의안을 제안하는 부서</div>
          <div>
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
            <div class="btn-group">
              <button>입장하기</button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">소모임활성화부</div>
        <div class="card">
          <div class="desc">소모임 활성화를 위한 부서</div>
          <div>
            <div class="tags">#소모임 #커뮤니티 #취미</div>
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
            <div class="btn-group">
              <button>입장하기</button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">쓰레기줄이기부</div>
        <div class="card">
          <div class="desc">
            쓰레기를 줄이기 위한 아이디어를 공유하고 실천하는 부서
          </div>
          <div>
            <div class="tags">#제로웨이스트 #쓰레기줄이기 #환경미화</div>
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
            <div class="btn-group">
              <button>입장하기</button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">채식진흥부</div>
        <div class="card">
          <div class="desc">의안을 제안하는 부서</div>
          <div>
            <div class="tags">#제로웨이스트 #쓰레기줄이기 #환경미화</div>
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
            <div class="btn-group">
              <button>입장하기</button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">문서정리부</div>
        <div class="card">
          <div class="desc">의안을 제안하는 부서</div>
          <div>
            <div class="tags">#제로웨이스트 #쓰레기줄이기 #환경미화</div>
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
            <div class="btn-group">
              <button>입장하기</button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">자연환경복원부</div>
        <div class="card">
          <div class="desc">의안을 제안하는 부서</div>
          <div>
            <div class="tags">#제로웨이스트 #쓰레기줄이기 #환경미화</div>
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
            <div class="btn-group">
              <button>입장하기</button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">에너지효율부</div>
        <div class="card">
          <div class="desc">의안을 제안하는 부서</div>
          <div>
            <div class="tags">#제로웨이스트 #쓰레기줄이기 #환경미화</div>
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
            <div class="btn-group">
              <button>입장하기</button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">소프트웨어개발부</div>
        <div class="card">
          <div class="desc">의안을 제안하는 부서</div>
          <div>
            <div class="tags">#제로웨이스트 #쓰레기줄이기 #환경미화</div>
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
            <div class="btn-group">
              <button>입장하기</button>
            </div>
          </div>
        </div>
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
};
</script>

<style></style>
