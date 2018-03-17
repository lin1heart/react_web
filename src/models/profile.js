import { login, signup } from '../services/api'
import { toast, debug } from '../utils'

const initialState = {
  username: '',
  password: '',
  mail: '',
  isLogin: false,
  showModal: false,
}
const reducers = {
  test(state, { payload }) {
    return { ...state, payload }
  },
  _login(state, { username }) {
    return { ...state, isLogin: true, username }
  },
  showModal(state) {
    return { ...state, showModal: true }
  },
  hideModal(state) {
    return { ...state, showModal: false }
  }
}
const effects = {
  *login({ name, pass }, { put, call }) {
    try {
      const res = yield call(login, name, pass)
      console.log('login res is ', res)
      yield put({ type: '_login', username: name, password: pass })
      toast('login success')
      yield put({ type: 'hideModal' })
    } catch (e) {
      toast(e.msg)
      console.log('login with error: ', e)
    }
  },
  *signup({ name, pass, mail }, { put, call }) {
    try {
      const res = yield call(signup, name, pass, mail)
      toast(res.msg)
      console.log('signup res is ', res)
    } catch (e) {
      toast(e.msg)
      console.log('signup with error: ', e)
    }
  },
  
}
export default {
  namespace: 'profile',
  state: initialState,
  reducers,
  effects,
}
