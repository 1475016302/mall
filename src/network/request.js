import axios from 'axios'

export function request (config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000 // 超时
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用 成功/失败
  instance.interceptors.request.use(config => {
    return config
  }, err => {
  })

  // 2.2.响应拦截 成功/失败
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config) // 本身的返回值就是个promise
}
