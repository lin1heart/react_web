const get = (url: string, params: Object = {}): Promise => {
  console.log('url + obj2urlParams(params) is ', url + obj2urlParams(params))
  return fetch(url + obj2urlParams(params))
    .then(res => res.json())
    .then(res => {
      console.log('%c get url res is ', 'color: green', res)
      const { code, msg } = res
      if (code !== 200) {
        console.log('%cerror fetch get %s, %o with error', 'color:red', url, params, msg)
        return Promise.reject('fetch get %s, %o with error', url, params, msg)
      }
      return res
    })
}

// post row data
const post = (url: string, params: Object = {}): Promise => {
  return fetch(url + obj2urlParams(params), {
    method: 'POST',
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(params)
  })
    .then(res => res.json())
    .then(res => {
      console.log('%c post url res is ', 'color: green', res)
      const { code, msg } = res
      if (code !== 200) {
        console.log('%cerror fetch get %s, %o with error', 'color:red', url, params, msg)
        return Promise.reject(res)
      }
      return res
    })
}
// post row data
const form = (url: string, params: Object = {}): Promise => {
  return fetch(url + obj2urlParams(params), {
    method: 'POST',
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: obj2urlParams(params)
  })
    .then(res => res.json())
    .then(res => {
      console.log('%c post res is ', 'color: green', res)
      const { code, msg } = res
      if (code !== 200) {
        console.log('%cerror fetch get %s, %o with error', 'color:red', url, params, msg)
        return Promise.reject(res)
      }
      return res
    })
}

export default {
  get,
  post,
  form
}

const obj2urlParams = (obj: Object): string => {
  return Object.keys(obj).length === 0
    ? ''
    : Object.keys(obj)
      .filter(key => obj[key] !== undefined)
      .reduce((str, key) => `${str}${key}=${obj[key]}&`, '')
      .slice(0, -1)
      .replace(/^/, '?')
}
