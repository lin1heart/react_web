const get = (url: string, params: Object = {}): Promise => {
  return fetch(url + obj2urlParams(params)).then(res => {
    return res.json();
  });
};
const post = (
  url: string,
  requestBody: Object = {},
  params: Object = {}
): Promise => {
  return fetch(url + obj2urlParams(params), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
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
    ? ""
    : Object.keys(obj)
        .filter(key => obj[key] !== undefined)
        .reduce((str, key) => `${str}${key}=${obj[key]}&`, "")
        .slice(0, -1)
        .replace(/^/, "?");
};
