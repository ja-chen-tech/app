import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
//轮播图全局组件
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)
//引入分页器全局组件
import pagination from '@/components/pagination'
Vue.component(pagination.name,pagination)
import { Button,MessageBox } from 'element-ui';
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入路由
import router from '@/router'
//引入vuex
import store from '@/store'
//引入mockSever.js-----mock数据
import '@/mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'

//统一接口api文件夹里的全部请求参数
import * as API from '@/api'
import { reqGetSearchInfo } from '@/api'
// console.log(reqGetSearchInfo({}))
Vue.config.productionTip = false
//引入表单检验插件
import '@/plugins/validate';
new Vue({
  render: h => h(App),
  //配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus= this;
    Vue.prototype.$API=API;
  },
  //注册路由
  router,
  store
}).$mount('#app')
