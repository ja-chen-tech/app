//search模块
import { reqGetSearchInfo } from '@/api'
const state = {
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    //获取search模块数据
    async getSearchList({ commit }, params = {}) {
        //params形参是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if (result.code === 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
//计算属性，在项目中，为了简化数据而生
const getters = {
    goodsList(state) {
        return state.searchList.goodsList
    },
    attrsList(state) {
        return state.searchList.attrsList
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}