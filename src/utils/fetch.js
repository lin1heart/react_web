const get = (url: string, params: Object = {}): Promise => {
  console.log('url + obj2urlParams(params) is ', url + obj2urlParams(params));
  return fetch(url + obj2urlParams(params))
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log('res2 is ', res);
      const { code, msg } = res;
      if (code !== 200) {
        console.log(
          '%cerror fetch get %s, %o with error',
          'color:red',
          url,
          params,
          msg
        );
        return Promise.reject('fetch get %s, %o with error', url, params, msg);
      }
      return res
    });
};
const post = (
  url: string,
  requestBody: Object = {},
  params: Object = {}
): Promise => {
  return fetch(url + obj2urlParams(params), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  }).then(res => res.json());
};

export default {
  get,
  post
};

const obj2urlParams = (obj: Object): string => {
  return Object.keys(obj).length === 0
    ? ''
    : Object.keys(obj)
        .filter(key => obj[key] !== undefined)
        .reduce((str, key) => `${str}${key}=${obj[key]}&`, '')
        .slice(0, -1)
        .replace(/^/, '?');
};
