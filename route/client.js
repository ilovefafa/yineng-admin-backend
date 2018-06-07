const Router = require('koa-router');
const moment = require('moment');
Client = require("../mongoose/model/client.js")
function sparateRouteFile(app) {
    let router = new Router({
        prefix: "/client"
    })

    router.post('/create', async (ctx, next) => {
        let client = ctx.request.body.form
        client.date = moment().format("YYYY-MM-DD HH:mm:ss")
        await Client.insertMany(client)
        ctx.body = {
            code: 20000,
            data: {

            }
        };
    });

    router.post('/update', async (ctx, next) => {
        let client = ctx.request.body.form
        let id = client.id
        await Client.updateOne({ _id: id }, client)
        ctx.body = {
            code: 20000,
            data: {

            }
        };
    });

    router.get('/get', async (ctx, next) => {
        let client = await Client.find({}, null, {
            sort: {
                date: -1
            }
        })
        ctx.body = {
            code: 20000,
            data: {
                client
            }
        };
    });

    router.post('/delete', async (ctx, next) => {
        let id = ctx.request.body.id
        let data = await Client.deleteOne({ _id: id })
        ctx.body = {
            message: "delete wrong!",
            code: 20000,
            data: {
                Client: data
            }
        };
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
}


module.exports = sparateRouteFile