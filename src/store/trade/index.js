import { reqAddressInfo,reqOrdeInfo } from '@/api'
const state = {
    address: [],
    orderinfo:{}
};
const mutations = {
    GETUSERADDRESS(state, address) {
        state.address = address;
    },
    GETORDERINFO(state,orderinfo){
        state.orderinfo=orderinfo;
    }
};
const actions = {
    //获取用户地址信息
    async getUserAddress({ commit }) {
        let result = await reqAddressInfo();
        if (result.code == 200) {
            commit('GETUSERADDRESS', result.data)
        }
    },
    //获取商品清单信息
    async getOrderInfo({commit}){
        let result=await reqOrdeInfo();
        if(result.code==200){
            commit('GETORDERINFO',result.data)
        }
    }

};
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}