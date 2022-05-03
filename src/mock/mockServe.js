//引入mockjs模块
import Mock from "mockjs";
//把json引入进来
//webpack默认引入图片和json格式
import banner from './banner.json'
import floor from './floor.json'
//mock数据：第一个参数是请求地址，第二个参数是数据
Mock.mock('/mock/banner',{code:200,data:banner})//模拟首页轮播图数据
Mock.mock('/mock/floor',{code:200,data:floor})