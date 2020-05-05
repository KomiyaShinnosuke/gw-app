import HelloWorld from '@/components/HelloWorld'
import TimeLine from '@/components/templates/TimeLine'
import LoginView from '@/components/templates/LoginView'

export default [{
  path: '/',
  name: 'TimeLine',
  component: TimeLine
  // meta: { requiresAuth: true },
  // children: [{
  //   path: 'tasks/:id',
  //   component: KbnTaskDetailModal,
  //   name: 'taskDetailModal',
  //   meta: { requiresAuth: true }
  // }]
}, {
  path: '/login',
  component: LoginView
}, {
  path: '*',
  redirect: '/'
}]
