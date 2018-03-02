import { login, signup } from '../services/api'
import { toast, debug } from '../utils'

const initialState = {
  username: '',
  password: '',
  mail: '',
  isLogin: false
}
const reducers = {
  test (state, { payload }) {
    return { ...state, payload }
  },
  _login (state, { username }) {
    return { ...state, isLogin: true, username }
  }
}
const effects = {
  *login ({ name, pass }, { put, call }) {
    try {
      const res = yield call(login, name, pass)
      console.log('login res is ', res)
      yield put({ type: '_login', username: name, password: pass })
    } catch (e) {
      toast(e.msg)
      console.log('signup with error: ', e)
    }
  },
  *signup ({ name, pass, mail }, { put, call }) {
    console.log('signup effect', name, pass, mail)
    try {
      const res = yield call(signup, name, pass, mail)
      toast(res.msg)
      console.log('signup res is ', res)
    } catch (e) {
      toast(e.msg)
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
