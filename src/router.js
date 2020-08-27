import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Settings from "./views/Settings.vue";

import Corporation from "./views/Corporation.vue";
import CorpForm from "./views/CorpForm.vue";
import CorpDetail from "./views/CorpDetail.vue";

import QnA from "./views/QnA.vue";
import QnADetail from "./views/QnADetail.vue";

import Archive from "./views/Archive.vue";
import Sponsor from "./views/Sponsor.vue";

import SignUpForm from "./views/SignUpForm.vue";
import LoginForm from "./views/LoginForm.vue";
import QnAForm from "./views/QnAForm.vue";

import News from "./views/News.vue";
import NewsDetail from "./views/NewsDetail.vue";
import NewsForm from "./views/NewsForm.vue";

// Department
import Department from "./views/Department.vue";
import DepartmentSpace from "./views/Department/DepartmentSpace.vue";
import DepartmentSettingsTab from "./views/Department/Settings/Tab.vue";
import DepartmentSettingsHome from "./views/Department/Settings/Home.vue";
import DepartmentSettingsMember from "./views/Department/Settings/Member.vue";

import DepartmentDocTab from "./views/Department/DocTab.vue";
import DepartmentNotice from "./views/Department/Doc/Notice.vue";
import DepartmentEvent from "./views/Department/Doc/Event.vue";
import DepartmentArchive from "./views/Department/Doc/Archive.vue";
import DepartmentLogs from "./views/Department/Doc/Logs.vue";

import DepartmentIssueTab from "./views/Department/IssueTab.vue";
import DepartmentIssueBoard from "./views/Department/Issue/IssueBoard.vue";
import DepartmentIssueDetail from "./views/Department/Issue/IssueDetail.vue";
import DepartmentIssueForm from "./views/Department/Issue/IssueForm.vue";

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

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },

    {
      path: "/Settings",
      component: Settings
    },
    {
      path: "/Corporation",
      component: Corporation
    },
    {
      path: "/CorpForm",
      component: CorpForm
    },
    {
      path: "/Corporation/:corpId",
      component: CorpDetail
    },
    {
      path: "/News",
      component: News
    },
    {
      path: "/News/:newsId",
      component: NewsDetail
    },
    {
      path: "/NewsForm",
      component: NewsForm
    },
    {
      path: "/QnA",
      component: QnA
    },
    {
      path: "/QnA/:qnaId",
      component: QnADetail
    },
    {
      path: "/Archive",
      component: Archive
    },
    {
      path: "/Sponsor",
      component: Sponsor
    },
    {
      path: "/SignUpForm",
      component: SignUpForm
    },
    {
      path: "/LoginForm",
      component: LoginForm
    },
    {
      path: "/QnAForm",
      component: QnAForm
    },
    {
      path: "/Group",
      component: Group
    },
    {
      path: "/Group/:groupId",
      component: GroupSpace,
      children: [
        {
          path: "",
          redirect: "/Group/:groupId/Doc"
        },
        {
          path: "Doc",
          component: DocTab,
          children: [
            {
              path: "",
              redirect: "/Group/:groupId/Doc/Notice"
            },
            {
              path: "Notice",
              component: Notice
            },
            {
              path: "Archive",
              component: GroupArchive
            },
            {
              path: "Logs",
              component: Logs
            },
            {
              path: "Event",
              component: Event
            }
          ]
        },
        {
          path: "Issue",
          component: IssueTab,
          children: [
            {
              path: "",
              redirect: "/Group/:groupId/Issue/IssueBoard"
            },
            {
              path: "IssueBoard",
              component: IssueBoard
            },
            {
              path: "IssueForm",
              component: IssueForm
            },
            {
              path: ":issueId",
              component: IssueDetail
            }
          ]
        },
        {
          path: "Settings",
          component: GroupSettingsTab,
          children: [
            {
              path: "",
              redirect: "/Group/:groupId/Settings/Home"
            },
            {
              path: "Home",
              component: GroupSettingsHome
            },
            {
              path: "Member",
              component: GroupSettingsMember
            }
          ]
        }
      ]
    },
    {
      path: "/Department",
      component: Department
    },
    {
      path: "/Department/:departmentId",
      component: DepartmentSpace,
      children: [
        {
          path: "",
          redirect: "/Department/:departmentId/Doc"
        },
        {
          path: "Doc",
          component: DepartmentDocTab,
          children: [
            {
              path: "",
              redirect: "/Department/:departmentId/Doc/Notice"
            },
            {
              path: "Notice",
              component: DepartmentNotice
            },
            {
              path: "Archive",
              component: DepartmentArchive
            },
            {
              path: "Logs",
              component: DepartmentLogs
            },
            {
              path: "Event",
              component: DepartmentEvent
            }
          ]
        },
        {
          path: "Issue",
          component: DepartmentIssueTab,
          children: [
            {
              path: "",
              redirect: "/Department/:departmentId/Issue/IssueBoard"
            },
            {
              path: "IssueBoard",
              component: DepartmentIssueBoard
            },
            {
              path: "IssueForm",
              component: DepartmentIssueForm
            },
            {
              path: ":issueId",
              component: DepartmentIssueDetail
            }
          ]
        },
        {
          path: "Settings",
          component: DepartmentSettingsTab,
          children: [
            {
              path: "",
              redirect: "/Department/:departmentId/Settings/Home"
            },
            {
              path: "Home",
              component: DepartmentSettingsHome
            },
            {
              path: "Member",
              component: DepartmentSettingsMember
            }
          ]
        }
      ]
    },
    {
      path: "/QnADetail",
      component: QnADetail
    }
  ]
});
