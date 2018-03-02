import { login, signup } from '../services/api'
import { toast, debug } from '../utils'
const initialState = {
  data: []
}
const reducers = {
  test (state, { payload }) {
    return { ...state, payload }
  }
}
const effects = {
  *login ({ name, pass }, { put, call }) {
    try {
      const res = yield call(login, name, pass)
      console.log('login res is ', res)
    } catch (e) {
      console.log('signup with error: ', e)
    }
  },
  *signup ({ name, pass, mail }, { put, call }) {
    console.log('signup effect', name, pass, mail)
    try {
      const res = yield call(signup, name, pass, mail)
      console.log('signup res is ', res)
    } catch (e) {
      console.log('signup with error: ', e)
    }
  }
}
export default {
  namespace: 'profile',
  state: initialState,
  reducers,
  effects
}
