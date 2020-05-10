import Vue from 'vue'
import Router from 'vue-router'
import TheStatus from '@/components/TheStatus'
import TheRoom from '@/components/TheRoom'
import TheCommand from '@/components/TheCommand'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheCommand',
      component: TheCommand
    }
  ]
})
