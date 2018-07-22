//test
// var fs = require('fs')
const path = require('path');

//数据库配置
require("./mongoose/index.js")
//koa实例
const Koa = require('koa');
const app = new Koa();
//跨域
let cors = require('koa2-cors');
app.use(cors({
  origin: '*',
}));
//解析数据
const koaBody = require('koa-body');
app.use(koaBody());
//静态资源
const static = require('koa-static')
// 配置静态资源
const staticPath = './dist'
app.use(static(
  path.join(__dirname, staticPath)
))
//路由
require("./route")(app)


app.listen(3001);