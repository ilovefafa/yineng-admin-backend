module.exports = function (app) {
    require("./item.js")(app)
    require("./user.js")(app)
    require("./client.js")(app)
    require("./staff.js")(app)
}