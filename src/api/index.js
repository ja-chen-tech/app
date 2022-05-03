//当前这个模块，api进行统一管理
import { get } from 'js-cookie'
import requests from './ajax'
import mockRequests from './mockAjax'
//获取三级联动接口
///api/product/getBaseCategoryList get 无参数
export const reqCategoryList=()=>{
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}
//获取banner数据首页轮播图 无参数
export const reqGetBannerList=()=>mockRequests.get('/banner')
//获取floor数据
export const reqFloorList=()=>mockRequests.get('/floor')
//获取搜素模块数据 地址：/api/list 请求方式：post
// 参数：需要带参数
  export const reqGetSearchInfo=(params)=>requests({url:'/list',method:'post',data:params})

  //获取产品详情信息的接口
//   请求地址/api/item/{ skuId } 请求方式get
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${ skuId }`,method:'get'})

//将产品添加到购物车活着更新产品参数
//接口/api/cart/addToCart/{ skuId }/{ skuNum } 请求方式POST
export const reqAddOrUpdateShopCart=({skuId,skuNum})=>requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})

//获取验证码
//接口地址/api/user/passport/sendCode/{phone}
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//注册接口
//url：/api/user/passport/register
export const reqUserRegister=(data)=>requests({url:`/user/passport/register`,data,method:'post'})

//登陆接口
//url:/api/user/passport/login
export const reqUserLogin=(data)=>requests({url:`/user/passport/login`,data,method:'post'})

//获取用户信息，需要带着用户的token
//URL：/api/user/passport/auth/getUserInfo
export const reqUserInfo=()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'})

//获取用户地址信息
//url：/api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo=()=>requests({url:`/user/userAddress/auth/findUserAddressList`,method:'get'})

//获取商品清单
//url：/api/order/auth/trade
export const reqOrdeInfo=()=>requests({url:`/order/auth/trade`,method:'get'})

//提交订单的接口
//url:/api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/api/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

//获取支付信息
//url:/api/payment/weixin/createNative/{orderId}
export const reqPayInfo=()=>requests({url:`/api/payment/weixin/createNative/${orderId}`,method:'get'})

//获取微信支付订单
//url：/api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

//获取个人中心
///api/order/auth/{page}/{limit}
export const reqMyOrderList=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})