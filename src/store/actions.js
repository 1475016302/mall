import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
  // 有判断逻辑建议放actions里面
  addCart (context, payload) {
    //payload新添加的商品
    // let oldProduct = null
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }

    //如果有重复值 则count +=1 否则新push进去并添加count属性

    return new Promise((resolve, reject) => {
      //1.查找之前数组中是否有改商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      //2.判断oldProduct
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前的商品数量+1')
      } else {
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })

  },
}