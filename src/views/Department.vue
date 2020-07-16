<template>
  <div>
    <h1>부서들</h1>
    <div class="top-btn-group">
      <SearchInput></SearchInput>
      <button>등록하기</button>
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
            <div class="footer-btn-group">
              <router-link to="/DepartmentSpace"><button>입장하기</button></router-link>
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
            <div class="footer-btn-group">
              <router-link to="/DepartmentSpace"><router-link to="/DepartmentSpace"><button>입장하기</button></router-link></router-link>
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
            <div class="footer-btn-group">
              <router-link to="/DepartmentSpace"><button>입장하기</button></router-link>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">채식진흥부</div>
        <div class="card">
          <div class="desc">채식요리 레시피를 공유하고 식당을 지도에 표시하며 사업을 하는 부서</div>
          <div>
            <div class="tags">#채식 #요리 #건강</div>
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
              <router-link to="/DepartmentSpace"><button>입장하기</button></router-link>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">문서정리부</div>
        <div class="card">
          <div class="desc">모든 부서의 문서를 정리하고 홍보물, 출판물을 만드는 부서</div>
          <div>
            <div class="tags">#행정 #번역 #홍보</div>
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
              <router-link to="/DepartmentSpace"><button>입장하기</button></router-link>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">자연환경복원부</div>
        <div class="card">
          <div class="desc">테라포밍 연구, 생태계 복원 사업, GWP가스 포집 기술연구, 식목사업</div>
          <div>
            <div class="tags">#식목사업 #토양오염 #대기오염 #하천오염</div>
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
              <router-link to="/DepartmentSpace"><button>입장하기</button></router-link>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">에너지효율부</div>
        <div class="card">
          <div class="desc">에너지 낭비를 줄이고 신재생에너지 연구와 사업을 담당하는 부서</div>
          <div>
            <div class="tags">#신재생에너지 #에너지효율</div>
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
              <router-link to="/DepartmentSpace"><button>입장하기</button></router-link>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="title">소프트웨어개발부</div>
        <div class="card">
          <div class="desc">기후변화 실시간 모니터링 개발, AI 기후위기대응 시나리오 프로비저닝</div>
          <div>
            <div class="tags">#인공지능 #사물인터넷 #소프트웨어</div>
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
              <router-link to="/DepartmentSpace"><button>입장하기</button></router-link>
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
