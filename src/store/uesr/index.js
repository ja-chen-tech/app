import { reqGetCode, reqUserRegister, reqUserLogin,reqUserInfo } from "@/api";
//登陆与注册的模块
const state = {
    code: "",
    token:''
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    UESRLOGIN(state,token){
        state.token=token;
    }
};
const actions = {
    //获取验证码
    async getCode({ commit, phone }) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //登录业务(token)
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        //服务器下发token，用户唯一标识符
        //将来经常用来通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            commit('UESRLOGIN', result.data.token);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //获取用户信息
 async   getUserInfo({commit}){
    let result=await reqUserInfo();
    console.log(result);
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}