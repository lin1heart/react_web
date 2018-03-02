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
    console.log('login effect', name, pass)
    yield 1
  },
  *signup ({ name, pass, mail }, { put, call }) {
    console.log('signup effect', name, pass, mail)
    try {
      const res = yield call(signup, name, pass, mail)
      console.log('res is ', res)
    } catch (e) {
      toast(e.errMsg)
      debug.throw(' with error', e)
    }
    yield 1
  }
}
export default {
  namespace: 'profile',
  state: initialState,
  reducers,
  effects
}
