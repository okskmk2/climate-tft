import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Department from "./views/Department.vue";
import Corporation from "./views/Corporation.vue";
import News from "./views/News.vue";
import QnA from "./views/QnA.vue";
import Archive from "./views/Archive.vue";
import Sponsor from "./views/Sponsor.vue";

import SignUpForm from "./views/SignUpForm.vue";
import LoginForm from "./views/LoginForm.vue";
import QnAForm from "./views/QnAForm.vue";

import NewsForm from "./views/NewsForm.vue";

import DepartmentSpace from "./views/DepartmentSpace.vue";

// Group
import Group from "./views/Group.vue";
import GroupForm from "./views/Group/GroupForm.vue";
import GroupSpace from "./views/Group/GroupSpace.vue";
import DocTab from "./views/Group/DocTab.vue";
import Notice from "./views/Group/Doc/Notice.vue";
import GroupArchive from "./views/Group/Doc/Archive.vue";
import Logs from "./views/Group/Doc/Logs.vue";

import IssueTab from "./views/Group/IssueTab.vue";
import IssueBoard from "./views/Group/Issue/IssueBoard.vue";
import IssueDetail from "./views/Group/Issue/IssueDetail.vue";
import IssueForm from "./views/Group/Issue/IssueForm.vue";

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
      path: "/GroupForm",
      component: GroupForm,
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
      path: "/NewsForm",
      component: NewsForm,
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
      path: "/Group/:groupId",
      component: GroupSpace,
      children: [
        {
          path: "",
          redirect: "/Group/:groupId/Doc",
        },
        {
          path: "Doc",
          component: DocTab,
          children: [
            {
              path: "",
              redirect: "/Group/:groupId/Doc/Notice",
            },
            {
              path: "Notice",
              component: Notice,
            },
            {
              path: "Archive",
              component: GroupArchive,
            },
            {
              path: "Logs",
              component: Logs,
            },
          ],
        },
        {
          path: "Issue",
          component: IssueTab,
          children: [
            {
              path: "",
              redirect: "/Group/:groupId/Issue/IssueBoard",
            },
            {
              path: "IssueBoard",
              component: IssueBoard,
            },
            {
              path: "IssueForm",
              component: IssueForm,
            },
            {
              path: ":id",
              component: IssueDetail,
            },
          ],
        },
      ],
    },
    {
      path: "/QnADetail",
      component: QnADetail,
    },
  ],
});
