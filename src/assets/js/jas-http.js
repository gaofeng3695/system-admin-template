import axios from 'axios';
import storage from './jas-storage';

const post = function (url, oParam, isToken) {
  if (isToken) {
    let token = storage.get('token', 1000 * 60 * 60 * 24); // 按照过期时间取token
    if (!token) { // 未取到token，重新加载
      location.reload();
      return;
    }
    url = url + '?token=' + token;
  }
  let a = new Promise((resolve, reject) => {
    axios
      .post(url, {
        ...oParam
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
  return a;
};

const get = function (url, oParam, isToken) {
  if (isToken) {
    let token = storage.get('token', 1000 * 60 * 60 * 24); // 按照过期时间取token

    if (!token) { // 未取到token，重新加载
      // location.reload();
      return;
    }
    url = url + '?token=' + token;
  }
  let a = new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: {
          ...oParam
        }
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
  return a;
};

export default {
  get,
  post,
  axios
};
