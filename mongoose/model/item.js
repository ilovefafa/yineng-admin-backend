var mongoose = require('mongoose');
var Schema = mongoose.Schema({
    ynID: String,
    date: String,
    name: String,
    client: String,
    salesman: String,
    technicalDirector: String,
    offerExpirationDate: String,
    status: String,
    scope: String,
    brand: String,
    manufactureExpirationDate: String,
    failureReason: String,
    otherFailureReason: String,
    consignee: String,
    address: String,
    remarks: String,
    confirm: {
        offerConfirm: { type: Boolean, default: false },
        orderConfirm: { type: Boolean, default: false },
        techConfirm: { type: Boolean, default: false },
        purchasingConfirm: { type: Boolean, default: false },
        warehouseConfirm: { type: Boolean, default: false },
        productConfirm: { type: Boolean, default: false },
        shipmentConfirm: { type: Boolean, default: false },
        offerConfirmDate: '',
        orderConfirmDate: "",
        techConfirmDate: "",
        purchasingConfirmDate: "",
        warehouseConfirmDate: "",
        productConfirmDate: "",
        shipmentConfirmDate: ""
    }
});

module.exports = mongoose.model('item', Schema);