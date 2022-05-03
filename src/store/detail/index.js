import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api'
const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    //获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    //将产品添加到购物车中
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return 'ok'
        } else {
            //加载购物车失败
            return Promise.reject(new Error('faile'));
        }
    }
}
const getters = {
    //路径导航的简化数据
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    //简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    //产品售卖的简化数据
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}