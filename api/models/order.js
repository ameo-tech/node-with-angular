(function () {

    "use strict";

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var orderSchema = new Schema({
        Name: String,
        Status: String
    });

    module.exports = mongoose.model('order', orderSchema, 'Order');
})();