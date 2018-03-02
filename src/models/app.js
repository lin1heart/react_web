export default {
  namespace: 'app',

  state: {
    typeIndex: 0,
    childIndex: 0
  },

  reducers: {
    updateChildIndex (state, { childIndex }) {
      console.log('uasdasd ,updateChildIndex is ', childIndex)
      return { ...state, childIndex }
    }
  },

  effects: {
    *fetch ({ payload }, { call, put }) {
      yield put({ type: 'save' })
    }
  }
}
