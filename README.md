# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


防抖：前面的所有触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续触发只会执行一次
节流：在规定的间隔时间范围内不会重复的回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发

模块开发步骤
1静态页面+静态组件拆分
2发送请求（API）
3Vuex（三连环）
4组件获取仓库数据，动态展示数据