(function () {
    "use strict";

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var orderItemSchema = new Schema({
        OrderId: String,
        Status: String,
        Name: String,
        Price: String,
        Quantity: String
    });

    module.exports = mongoose.model('orderItems', orderItemSchema, 'OrderItems');
})();