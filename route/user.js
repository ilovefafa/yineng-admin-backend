const Router = require('koa-router');
User = require("../mongoose/model/user.js")
function sparateRouteFile(app) {
    let router = new Router({
        prefix: "/user"
    })

    router.post('/login', async (ctx, next) => {
        let username = ctx.request.body.username
        let password = ctx.request.body.password
        let valid = await User.findOne({ username, password })
        if (!valid) {
            ctx.body = {
                message: '账号或密码错误',
                code: 50006,
                data: {

                }
            };
        } else {
            ctx.body = {
                code: 20000,
                data: {
                    token: valid.token
                }
            };
        }

    });

    router.get('/info', async (ctx, next) => {
        let token = ctx.request.query.token
        if (token === 'admin') {
            ctx.body = {
                code: 20000,
                data: {
                    roles: ["admin"],
                    name: "admin",
                    avatar: "test"
                }
            }
        } else if (token === 'tech') {
            ctx.body = {
                code: 20000,
                data: {
                    roles: ["tech"],
                    name: "tech",
                    avatar: "test"
                }
            }
        } else if (token === 'plant') {
            ctx.body = {
                code: 20000,
                data: {
                    roles: ["plant"],
                    name: "plant",
                    avatar: "test"
                }
            }
        } else if (token === 'purchase') {
            ctx.body = {
                code: 20000,
                data: {
                    roles: ["purchase"],
                    name: "purchase",
                    avatar: "test"
                }
            }
        }

    });

    router.post('/logout', (ctx, next) => {
        ctx.body = {
            code: 20000,
            data: {

            }
        };
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = sparateRouteFile
