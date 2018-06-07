const Router = require('koa-router');
const moment = require('moment');
function sparateRouteFile(app) {
    let router = new Router()

    router.post('/', (ctx, next) => {
        ctx.body = {
            message: "message",
            code: 20000,
            data: {
                roles: ["admin"],
                name: "zhengfan",
                avatar: "test"
            }
        };
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
}


module.exports = sparateRouteFile