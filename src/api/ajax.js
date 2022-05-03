//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
//1.利用axios对象的方法create，去创建一个axios实例
//2.request就是axios,只不过稍微配置一下
const requests=axios.create({
    //配置对象
    //基础路径，发送请求的时候，路径中会出现api
    baseURL:'/api',
    //代表请求超时时间
    timeout:5000
});
//请求拦截器，在发请求前，请求拦截器可以检测到，可以在请求发出前做一些事情
requests.interceptors.request.use((config)=>{
    //进度条开始动
    nprogress.start()
return config
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done()
return res.data
},(error)=>{
return Promise.reject(new Error('faile'))
})
export default requests