import axios from 'axios'
import qs from 'qs'
import httpApi from './httpApi.js'
// const baseSrc = ""
function setUrl(src) {
  let url = httpApi.api.baseSrc + httpApi.api[src]
  return  encodeURI(url)
}

function setOutUrl(src) {
  let url = httpApi.api[src]
  return  encodeURI(url)
}
export default {
  install(Vue) {
    //get 请求
    Vue.prototype.GetAxios = function(src, params) {
      let url = setUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios.get(url, params)
          .then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    Vue.prototype.GetJson = function(src, params){
      let url = setUrl(src) //设置url
      return new Promise((resolve,reject)=>{
        axios.request({
              url: url,
              method:"get",
              params: params,
              headers: {
                'Content-Type': "application/json; charset=utf-8"
              }
          }).then((ok)=>{
              resolve(ok)
          }).catch((err)=>{
              reject(err)
          })
      })
  }
    // formdata格式 post
    Vue.prototype.PostAxios = function(src, params) {
      let url = setUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
          .then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    // json格式 post
    Vue.prototype.PostJsonAxios = function(src, params) {
      let obj = setUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios({
            url: obj,
            method: 'post',
            data:params,
            headers: {
              'Content-Type': "application/json; charset=utf-8"
            },
          }).then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    //接入第三方时的请求
    //get 请求
    Vue.prototype.GetOutAxios = function(src, params) {
      let url = setOutUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios.get(url, params)
          .then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    Vue.prototype.GetOutJson = function(src, params){
      let url = setOutUrl(src) //设置url
      return new Promise((resolve,reject)=>{
        axios.request({
              url: url,
              method:"get",
              params: params,
              headers: {
                'Content-Type': "application/json; charset=utf-8"
              }
          }).then((ok)=>{
              resolve(ok)
          }).catch((err)=>{
              reject(err)
          })
      })
  }
    // formdata格式 post
    Vue.prototype.PostOutAxios = function(src, params) {
      let url = setOutUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
          .then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    // json格式 post
    Vue.prototype.PostOutJsonAxios = function(src, params) {
      let obj = setOutUrl(src) //设置url
      return new Promise((resolve, reject) => {
        axios({
            url: obj,
            method: 'post',
            data:params,
            headers: {
              'Content-Type': "application/json; charset=utf-8"
            },
          }).then(response => {
            resolve(response);
          }, err => {
            reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      })
    }

  }
}


/* 请求拦截器 */
// let comloading = ''
// axios.interceptors.request.use(function(config) { // 每次请求时会从localStorage中获取token
//   var token = sessionStorage.getItem('token');
//   if (token) {
//     config.headers.common['token'] = [token];
//   }
//   return config
// }, function(error) {
//   return Promise.reject(error)
// })
// // 响应
// axios.interceptors.response.use(response => {
//   // if (response.status == 401) {
//   //   if (vm.$route.path != '/login') {
//   //     vm.$alert('登录异常，请重新登录', '提示', {
//   //       confirmButtonText: '确定',
//   //       callback: action => {
//   //         vm.$router.push('/login')
//   //       }
//   //     });
//   //   }
//   // }
//   console.log(response)
//   let data = response.data
//   if(data.data) {
//     data.data = JSON.parse(decrypt(data.data))
//   }
//   if(data.code !== 0) {
//     console.log(decrypt(data.message))
//     vm.$message.error(decrypt(data.message))
//     return
//   }else {
//     return data
//   }
// }, error => {
//   vm.$message.error('连接错误,请稍后再试')
//   console.log(error)
//   return Promise.resolve(error.response)
// },data => {
//   console.log(data)
// })
