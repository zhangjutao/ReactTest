/*
使用axios封装的ajax请求函数，函数返回的是promise对象
*/

import axios from 'axios';

export default function ajax(url = '', data = {}, type = 'GET'){
  if(type === 'GET'){
    //发送get请求
    let dataStr = '';
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    })
    if(dataStr !== ''){
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }

    return axios.get(url);
  }else{
    //发送post请求
    return axios.post(url, data);
  }
}