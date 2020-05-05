import * as types from './mutation-types'
import { Auth } from '../api'

export default {
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({ token, userId }) => {
        localStorage.setItem('token', token)
        commit(types.AUTH_LOGIN, { token, userId })
      })
      .catch(err => { throw err })
    },
  logout: ({ commit, state }) => {
    return Auth.logout(state.auth.token)
      .then(() => {
        localStorage.removeItem('token')
        commit(types.AUTH_LOGOUT, { token: null, userId: null })
      })
      .catch(err => { throw err })
  }
}
