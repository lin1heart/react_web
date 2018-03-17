import { version } from '../services/api'
import { toast, debug } from '../utils'

console.log()
export default {
  namespace: 'app',

  state: {
    typeIndex: 0,
    childIndex: 0,
    snackMessage: 'system error',
    showSnack: false
  },

  reducers: {
    updateChildIndex(state, { childIndex }) {
      console.log('uasdasd ,updateChildIndex is ', childIndex)
      return { ...state, childIndex }
    },
    showSnack(state, { message = 'system error' }) {
      return { ...state, showSnack: true, snackMessage: message }
    },
    hideSnack(state) {
      return { ...state, showSnack: false, snackMessage: 'init' }
    }
  },

  effects: {
 
    *version({ payload }, { call, put }) {
      console.log('version start')
      try {
        const { data: username } = yield call(version)
        console.log('username is ', username)
        if(username) {
          yield put({ type: 'profile/_login', username})
          toast('お帰りなさい、' + username)
        }
      } catch(e) {
        debug.fail('version fail')
      }
    },
    addWatcher: [function*({ take, put, call }) {
      while (true) {
        const { payload } = yield take('global/dispatch');
        yield put({ type: 'version'})
      }
    }, { type: 'watcher' }],
  },
  subscriptions: {
    setup({ history, dispatch }) {
      // dispatch({ type: 'version' });
    },
  }
}
