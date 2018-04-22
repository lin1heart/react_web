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
    onlineCount: 1,
    selfCount: 1,
  },

  reducers: {
    updateChildIndex(state, { childIndex }) {
      console.log('updateChildIndex is ', childIndex)
      return { ...state, childIndex }
    },
    showSnack(state, { message = 'system error' }) {
      return { ...state, showSnack: true, snackMessage: message }
    },
    hideSnack(state) {
      return { ...state, showSnack: false, snackMessage: 'init' }
    },
    updateCount(state, data) {
      return { ...state, ...data }
    },
  },

  effects: {
    * version({ payload }, { call, put }) {
      console.log('version start')
      try {
        const { data } = yield call(version)
        console.log('version res is ', data)
        const { dbCount, onlineCount, name = 'master', selfCount } = data || {}
        if (name) {
          yield put({ type: 'profile/_login', username: name })
          toast('お帰りなさい、' + name)
          yield put({ type: 'updateCount', dbCount, onlineCount, selfCount })
        }
      } catch (e) {
        debug.fail('version fail', e)
      }
    },
    addWatcher: [
      function * ({ take, put, call }) {
        while (true) {
          yield take('event/dispatch')
          yield put({ type: 'version' })
        }
      },
      { type: 'watcher' },
    ],
  },
  subscriptions: {
    setup({ history, dispatch }) {
      // dispatch({ type: 'version' });
    },
  },
}
