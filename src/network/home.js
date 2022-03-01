import { request } from "./request";

/* 封装首页home的全部网络请求 */

// 请求首页的多个数据
export function getHomeMultidata () {
  return request({
    url:'/home/multidata'
  })
}

// 请求首页商品数据
export function getHomeGoods (type,page) {
  return request({
    url: '/home/data',
    method: 'get',
    params: {
      type,
      page
    }
  })
}