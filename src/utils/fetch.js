import debug from './debug'

const httpLogSwitch = true

const get = (url, params) => {
  debug.custom(
    {
      color: 'green',
      prefix: '__fetch__ get start ' + url,
      show: httpLogSwitch,
    },
    params
  )
  return fetch(url + obj2urlParams(params), {credentials: 'include'})
    .then(res => res.json())
    .then(res => {
      debug.custom(
        {
          color: 'green',
          prefix: '__fetch__ get receive ' + url,
          show: httpLogSwitch,
        },
        params
      )
      const { code, msg } = res
      if (code !== 200) {
        return Promise.reject(res)
      }
      return res
    })
    .catch(e => {
      debug.custom(
        {
          color: 'red',
          prefix: '__fetch__ get receive reveive ERROR ' + url,
          show: httpLogSwitch,
        },
        params
      )
      throw e
    })
}

// post row data
const post = (url, params) => {
  debug.custom(
    {
      color: 'green',
      prefix: '__fetch__ post start ' + url,
      show: httpLogSwitch,
    },
    params
  )
  return fetch(url, {
    method: 'POST',
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify(params),
  })
    .then(res => res.json())
    .then(res => {
      debug.custom(
        {
          color: 'green',
          prefix: '__fetch__ POST receive ' + url,
          show: httpLogSwitch,
        },
        params
      )
      const { code, msg } = res
      if (code !== 200) {
        return Promise.reject(res)
      }
      return res
    })
    .catch(e => {
      debug.custom(
        {
          color: 'red',
          prefix: '__fetch__ post reveive ERROR ' + url,
          show: httpLogSwitch,
        },
        params
      )
      throw e
    })
}
// post row data
const params = (url, params) => {
  debug.custom(
    {
      color: 'green',
      prefix: '__fetch__ params start ' + url,
      show: httpLogSwitch,
    },
    params
  )
  const prarmsStr = obj2urlParams(params)
  return fetch(url, {
    method: 'POST',
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    credentials: 'include',
    body: prarmsStr.substr(1, prarmsStr.length),
  })
    .then(res => res.json())
    .then(res => {
      debug.custom(
        {
          color: 'green',
          prefix: '__fetch__ params receive ' + url,
          show: httpLogSwitch,
        },
        params
      )
      const { code, msg } = res
      if (code !== 200) {
        return Promise.reject(res)
      }
      return res
    })
    .catch(e => {
      debug.custom(
        {
          color: 'red',
          prefix: '__fetch__ params reveive ERROR ' + url,
          show: httpLogSwitch,
        },
        params
      )
      throw e
    })
}

export default {
  get,
  post,
  params,
}

const obj2urlParams = obj => {
  return Object.keys(obj).length === 0
    ? ''
    : Object.keys(obj)
      .filter(key => obj[key] !== undefined)
      .reduce((str, key) => `${str}${key}=${obj[key]}&`, '')
      .slice(0, -1)
      .replace(/^/, '?')
}
