import fetch from 'isomorphic-fetch';

export default function callApi({ endpoint, options = {}}) {
  const defaultOptions = {
    method: options.method,
    headers: {
      'content-type': 'application/json'
    }
  };

  const getUrl = () => {
    const finalUrl = API_ENDPOINT;
    if (window.location.hostname === 'localhost') {
      return `/api/${endpoint}`;
    } else {
      return `${finalUrl}/${endpoint}`;
    }
  };

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    return response.json().then(err => Promise.reject(err));
  }

  return fetch(getUrl(), { ...defaultOptions, ...options })
    .then(res => checkStatus(res))
    .then(res => res.json())
    .catch(err => Promise.reject(err));
}
