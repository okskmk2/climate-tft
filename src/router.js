import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Settings from "./views/Settings.vue";
import Department from "./views/Department.vue";
import Corporation from "./views/Corporation.vue";
import QnA from "./views/QnA.vue";
import Archive from "./views/Archive.vue";
import Sponsor from "./views/Sponsor.vue";

import SignUpForm from "./views/SignUpForm.vue";
import LoginForm from "./views/LoginForm.vue";
import QnAForm from "./views/QnAForm.vue";

import News from "./views/News.vue";
import NewsDetail from "./views/NewsDetail.vue";
import NewsForm from "./views/NewsForm.vue";

import DepartmentSpace from "./views/DepartmentSpace.vue";

// Group
import Group from "./views/Group.vue";
import GroupSpace from "./views/Group/GroupSpace.vue";
import GroupSettingsTab from "./views/Group/Settings/Tab.vue";
import GroupSettingsHome from "./views/Group/Settings/Home.vue";
import GroupSettingsMember from "./views/Group/Settings/Member.vue";

import DocTab from "./views/Group/DocTab.vue";
import Notice from "./views/Group/Doc/Notice.vue";
import Event from "./views/Group/Doc/Event.vue";
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
      path: "/Settings",
      component: Settings,
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
      path: "/News/:newsId",
      component: NewsDetail,
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
            {
              path: "Event",
              component: Event,
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
              path: ":issueId",
              component: IssueDetail,
            },
          ],
        },
        {
          path: "Settings",
          component: GroupSettingsTab,
          children: [
            {
              path: "",
              redirect: "/Group/:groupId/Settings/Home",
            },
            {
              path: "Home",
              component: GroupSettingsHome,
            },
            {
              path: "Member",
              component: GroupSettingsMember,
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
