import fetch from '../services/fetch';

const initialState = {
  imamgeList: 'asdada',
};
const reducers = {
  test1(state, { test }) {
    console.log('test1 payload  ', test);
    return { ...state, test };
  },
};
const effects = {
  *effect({ payload }, { put, call, select, take }) {
    yield 1;
  },
  *test2({ payload }, { put }) {
    console.log('test2 payload', payload);
    yield put({ type: 'test1', test: 'from effects' });
    yield put({ type: 'fetchTest' });
  },
  *fetchTest(payload, { put, call }) {
    try {
      const res = yield fetch.get('http://api.bob.com/');
      console.log(' res is ', res);
    } catch (e) {
      console.log('fetchTest  with error: ', e);
    }
  },
};
export default {
  namespace: 'imageList',
  state: initialState,
  reducers,
  effects,
};
