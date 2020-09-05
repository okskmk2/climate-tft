<template>
  <div>
    <h1>설정</h1>
    <section>
      <label>웹어플리케이션 너비</label>
      <select v-model="$store.state.containerType">
        <option value="full">full</option>
        <option value="normal">normal</option>
      </select>
    </section>
    <section>
      <span>대표 이미지</span>
      <img src="">
    </section>
    <section>
      <span>권한</span>
      <ul>
        <li><input type="checkbox" /> 뉴스 글쓰기</li>
        <li><input type="checkbox" /> 부서 생성하기</li>
        <li><input type="checkbox" /> 단체 등록하기</li>
        <li><input type="checkbox" /> 회사 등록하기</li>
        <li><input type="checkbox" /> 질문과 답변 답변하기</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
