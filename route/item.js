const Router = require('koa-router');
const moment = require('moment');
Item = require("../mongoose/model/item.js")

function sparateRouteFile(app) {
    let router = new Router({
        prefix: "/item"
    })

    router.get('/get', async (ctx, next) => {


        let data = await Item.find({ status: { $nin: ['失效', '项目完成'] } })
        ctx.body = {
            message: "get wrong!",
            code: 20000,
            data: {
                item: data
            }
        };
    });


    router.post('/save', async (ctx, next) => {
        let itemInfo = ctx.request.body.item
        let prevItem = await Item.findOne().sort({ _id: -1 }).exec()
        let compare = `Y${moment().format("YYYYMMDD")}01`
        let prevID = prevItem.ynID
        if (prevID >= compare) {
            let getNumber = prevID.substr(1)
            itemInfo.ynID = `Y${parseInt(getNumber) + 1}`
        } else {
            itemInfo.ynID = compare
        }
        itemInfo.date = moment().format("YYYY-MM-DD HH:mm:ss")
        await Item.insertMany(itemInfo)
        ctx.body = {
            message: "save wrong!",
            code: 20000,
            data: {
            }
        };
    });

    router.get('/edit', async (ctx, next) => {
        let id = ctx.request.query.id
        let data = await Item.findOne({ _id: id })
        ctx.body = {
            message: "get wrong!",
            code: 20000,
            data: {
                item: data
            }
        };
    });

    router.post('/update', async (ctx, next) => {
        let item = ctx.request.body.item
        let id = item._id
        let data = await Item.update({ _id: id }, item)
        ctx.body = {
            message: "get wrong!",
            code: 20000,
            data: {
                item: data
            }
        };
    });

    router.post('/delete', async (ctx, next) => {
        let id = ctx.request.body.id
        let data = await Item.deleteOne({ _id: id })
        ctx.body = {
            message: "delete wrong!",
            code: 20000,
            data: {
                item: data
            }
        };
    });

    router.get('/currentQuery', async (ctx, next) => {
        let queryItemData = ctx.request.query.queryItemData
        let data = await Item.find({ name: new RegExp(queryItemData, 'i') })
        ctx.body = {
            message: "delete wrong!",
            code: 20000,
            data: {
                item: data
            }
        };
    });

    router.get('/historyQuery', async (ctx, next) => {
        let queryItemData = ctx.request.query.queryItemData
        let data = await Item.find({
            name: new RegExp(queryItemData, 'i'),
            status: { $in: ['失效', '项目完成'] }
        })
        ctx.body = {
            message: "delete wrong!",
            code: 20000,
            data: {
                item: data
            }
        };
    });


    router.get('/getHistory', async (ctx, next) => {
        let data = await Item.find({ status: { $in: ['失效', '项目完成'] } })
        ctx.body = {
            message: "get wrong!",
            code: 20000,
            data: {
                item: data
            }
        };
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
}


module.exports = sparateRouteFile