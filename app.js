//数据库配置
require("./mongoose/index.js")
//koa实例
const Koa = require('koa');
const app = new Koa();
//跨域
let cors = require('koa2-cors');
app.use(cors({
    origin: 'http://localhost:9528',
}));
//解析数据
const koaBody = require('koa-body');
app.use(koaBody());
//路由
require("./route")(app)

app.listen(3000);