const Router = require('koa-router');
const moment = require('moment');
Staff = require("../mongoose/model/staff.js")

function sparateRouteFile(app) {
    let router = new Router({
        prefix: "/staff"
    })

    router.post('/create', async (ctx, next) => {
        let req = ctx.request.body.form
        req.date = moment().format("YYYY-MM-DD HH:mm:ss")
        await Staff.insertMany(req)
        ctx.body = {
            code: 20000,
            data: {

            }
        };
    });

    router.post('/update', async (ctx, next) => {
        let req = ctx.request.body.form
        let id = req.id
        await Staff.updateOne({ _id: id }, req)
        ctx.body = {
            code: 20000,
            data: {

            }
        };
    });

    router.get('/get', async (ctx, next) => {
        let staff = await Staff.find({}, null, {
            sort: {
                date: -1
            }
        })
        ctx.body = {
            code: 20000,
            data: {
                staff
            }
        };
    });

    router.get('/getsalesman', async (ctx, next) => {
        let salesman = await Staff.find({ jobTitle: '业务员' })
        ctx.body = {
            code: 20000,
            data: {
                salesman
            }
        };
    });

    router.get('/gettechnicalDirector', async (ctx, next) => {
        let technicalDirector = await Staff.find({ jobTitle: '电气工程师' })
        ctx.body = {
            code: 20000,
            data: {
                technicalDirector
            }
        };
    });


    router.post('/delete', async (ctx, next) => {
        let id = ctx.request.body.id
        let data = await Staff.deleteOne({ _id: id })
        ctx.body = {
            message: "delete wrong!",
            code: 20000,
            data: {
                Staff: data
            }
        };
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
}


module.exports = sparateRouteFile