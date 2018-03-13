import Vue from 'vue'
import Router from 'vue-router'
import Issues from '@/pages/Issues'
import NewIssue from '@/pages/NewIssue'
import Issue from '@/pages/Issue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'issues',
      component: Issues
    },
    {
      path: '/issues/new',
      name: 'new-issue',
      component: NewIssue
    },
    {
      path: '/issues/:id',
      name: 'issue',
      component: Issue
    }
  ]
})
