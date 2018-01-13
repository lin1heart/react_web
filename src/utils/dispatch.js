import invariant from 'fbjs/lib/invariant';

export let dispatch = () => {
  invariant(false, 'global dispatch 初始化中，等待执行 dispatchHelper');
};

export const dispatchHelper = app => {
  console.log('dispatchHelper start init');
  dispatch = app.getStore().dispatch;
};
