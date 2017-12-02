// 1. 导入app.vue
// const app = require("./App.vue");
// es6写法
import App from './App.vue';


// 2. 使用Vue框架, 使App.vue作为第一个被用户看到的组件
// 安装Vue: cnpm i vue --save
// 然后导入第三方包
import Vue from 'vue';

// 导入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint); // 通过use方法集成

// 导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

// 定义组件
import home from '@/home/home';
import category from '@/category/category';
import newslist from '@/news/news';

// 导入mui样式
import './statics/css/mui.css';
import './statics/fonts/mui.ttf';

// 导入公共样式
import './statics/css/style.css';

// 创建路由对象, 设置路由规则
const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'}, //重定向
        {path: '/home', component: home},
        {path: '/category', component: category},
        {path: '/news/newsList', component: newslist}
    ]
})

// 创建根实例, 在根实例中, 让框架第一个显示App.vue
new Vue({
    el: "#app",
    router,
    // 想要第一个就显示App.vue, 需要render属性
    // render: function(createElement) {
    //     return createElement(App);
    // }
    // 箭头函数写法:
    render: h => h(App)
});

// 终端执行命令 : webpack-dev-server --progress --config webpack.config.dev.js --open --port 4000 --hot
// 开发阶段使用webpack-dev-server, 这时打包生成的bundle.js以及根据参照文件生成的index.html(之所以用index.html, 是因为服务器会默认进入index.html)会默认提交到webpack-dev-server的服务器上, 在本地文件夹是看不见的
// --progress: 命令执行进度, 可以在终端中看见打包的进度
// --config: 指定打包的文件名称 (一般会分为开发webpack.config.dev.js和生产webpack.config.pro.js, 而webpack或webpack-dev-server命令默认找的是webpack.config.js, 所以需要用--config指定找的文件名)
// --open: 自动打开浏览器
// --port: 默认的端口号是8080, 像tomcat就是这个端口号, 所以可以自己指定一个端口号
// --hot: 开启热重载, 因为安装了vue-loader, 它提供了热重载的功能

// 另外还有其他的参数: 
// --p: 压缩打包后的bundle.js
// --watch: 让webpack实时监控

// 上述这样的执行命令不免过长, 每次敲会很繁琐, 可以将其配置到package.json中
// 然后就可以通过 npm run 自定义名称 进行运行


// 一般在项目中, 发布自己完成的模块到git上时, 不会把node_modules也发不上去, 因为很大, 但是如果其他同事拉了项目, 怎么运行呢? pakeage.json中记录了所有用到的包, 直接在终端中cnpm / npm install即可