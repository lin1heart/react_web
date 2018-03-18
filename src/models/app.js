import { version } from '../services/api'
import { toast, debug } from '../utils'

export default {
  namespace: 'app',

  state: {
    typeIndex: 0,
    childIndex: 0,
    snackMessage: 'system error',
    showSnack: false,
    dbCount: 1,
    onlineCount: 1
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
    },
    updateCount(state, { dbCount, onlineCount }) {
      return { ...state, dbCount, onlineCount}
    }
  },

  effects: {
 
    *version({ payload }, { call, put }) {
      console.log('version start')
      try {
        const res =  yield call(version)
        console.log('version res is ', res)
        const { dbCount, onlineCount, name = 'master' } = res.data || {}
        if(res) {
          yield put({ type: 'profile/_login', username: name })
          toast('お帰りなさい、' + name)
          yield put({ type: 'updateCount', dbCount, onlineCount })
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
