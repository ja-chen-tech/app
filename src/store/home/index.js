import {reqCategoryList, reqGetBannerList,reqFloorList} from '@/api'
//home模块
const state={
    //三级菜单数据
    categoryList:[],
    //轮播图数据
    bannerList:[],
    //floor数据
    floorList:[]
}
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    }
}
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  async categoryList({commit}) {
      //reqgetCategoryList返回的是一个Promise对象
      //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
      let result =await reqCategoryList()
      if( result.code ==200) {
        commit('CATEGORYLIST', result.data);
      }
    },
    //获取轮播图数据
   async getBannerList({commit}){
        let result=await reqGetBannerList()
        if( result.code ==200) {
            commit('GETBANNERLIST', result.data);
          }
    },
    //获取floor数据
    async getFloorList({commit}){
        let result=await reqFloorList()
        if( result.code ==200) {
            commit('GETFLOORLIST', result.data);
          }
    }
}
//计算属性
const getters={

}
export default{
    state,
    mutations,
    actions,
    getters
}