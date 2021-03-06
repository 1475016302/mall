import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
  // mutations唯一的目的就是修改state中状态
  // mutations中的每个方法尽可能完成的事件比较单一一点
  // 数量+1
  [ADD_COUNTER] (state, payload) {
    payload.count++;
  },
  [ADD_TO_CART] (state, payload) {
    //最新添加到购物车的商品checked为true
    for (let i in state.cartList) {
      state.cartList[i].checked = false
    }
    payload.checked = true
    state.cartList.unshift(payload)
  }
}