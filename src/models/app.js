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
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' })
    }
  }
}
