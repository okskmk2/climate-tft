<template>
  <nav class="gnb">
    <router-link to="/Group">
      <span>{{ $t("group") }}</span>
    </router-link>
    <router-link to="/Department">
      <span>{{ $t("departments") }}</span>
    </router-link>
    <router-link to="/Corporation">
      <span>{{ $t("corporation") }}</span>
    </router-link>
    <router-link to="/News">
      <span>{{ $t("news") }}</span>
    </router-link>
    <router-link to="/QnA">
      <span>{{ $t("qna") }}</span>
    </router-link>
    <router-link to="/Archive">
      <span>{{ $t("archives") }}</span>
    </router-link>    
  </nav>
</template>

<i18n>
ko:
  departments: 중앙부서
  group: 연합단체들
  corporation: 회사
  news: 뉴스
  qna: 질문과 답변
  archives: 자료실
en:
  departments: Departments
  group: Group
  corporation: Corporation
  news: News
  qna: QnA
  archives: Archives
</i18n>
