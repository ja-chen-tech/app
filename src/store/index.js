import Vue from 'vue'
import Vuex from 'vuex'
//使用插件
Vue.use(Vuex)
// //state:仓库存储数据
// const state={
//     count:1
// }
// //书写自己的业务，也可以异步处理
// const actions={
//     add({commit}){
//         commit('ADD')
//     }
// }
// //修改state的唯一手段
// const mutations={
//     ADD(state){
//         state.count++
//     }
// }
// //理解为计算属性，用于简化仓库，让组件获取数据更加方便
// const getters={}
// export default new Vuex.Store({
//     state,
//     actions,
//     mutations,
//     getters
// })
//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import user from './uesr'
import trade from './trade'
export default new Vuex.Store({
    //实现vuex仓库模块式开发存储数据
    modules:{
        home,
        search,
        detail,
        user,
        trade
    }
})