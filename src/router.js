import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Department from "./views/Department.vue";
import Group from "./views/Group.vue";
import Corporation from "./views/Corporation.vue";
import News from "./views/News.vue";
import QnA from "./views/QnA.vue";
import Archive from "./views/Archive.vue";
import Sponsor from "./views/Sponsor.vue";

import SignUpForm from "./views/SignUpForm.vue";
import LoginForm from "./views/LoginForm.vue";
import QnAForm from "./views/QnAForm.vue";

import DepartmentSpace from "./views/DepartmentSpace.vue";
import GroupSpace from "./views/GroupSpace.vue";

import QnADetail from "./views/QnADetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Department",
      component: Department,
    },
    {
      path: "/Group",
      component: Group,
    },
    {
      path: "/Corporation",
      component: Corporation,
    },
    {
      path: "/News",
      component: News,
    },
    {
      path: "/QnA",
      component: QnA,
    },
    {
      path: "/Archive",
      component: Archive,
    },
    {
      path: "/Sponsor",
      component: Sponsor,
    },
    {
      path: "/SignUpForm",
      component: SignUpForm,
    },
    {
      path: "/LoginForm",
      component: LoginForm,
    },
    {
      path: "/QnAForm",
      component: QnAForm,
    },
    {
      path: "/DepartmentSpace",
      component: DepartmentSpace,
    },
    {
      path: "/GroupSpace",
      component: GroupSpace,
    },
    {
      path: "/QnADetail",
      component: QnADetail,
    },
  ],
});
