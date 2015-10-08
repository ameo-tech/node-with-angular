(function () {
    "use strict";

    var order = require('../models/order');
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/CustomerDetails');
    var db = mongoose.connection;

    db.once('open', function (callback) {
        for (var index = 1; index <= 10; index++) {
            var orderModel = new order();
            orderModel.Name = "Apple " + index;
            orderModel.Status = "NEW";

            orderModel.save(function (err, ord) {
                if (err) {
                    console.error(err);
                }
                console.log(JSON.stringify(ord));
            });
        }

    });

    var orderHelper = {};

    orderHelper.getOrders = function (req, res) {
        order.find(function (err, orders) {
            if (err) {
                return res.send(err);
            }
            return res.json(orders);
        });
    };

    orderHelper.updateOrder = function (req, res) {
        var orderToUpdate = req.body.order;
        order.findById(orderToUpdate._id, function (err, dbOrder) {

            if (err) {
                return res.send(err);
            }
            dbOrder.Status = orderToUpdate.Status;
            console.log(JSON.stringify(dbOrder));
            dbOrder.save(function (err) {
                if (err) {
                    return res.send(err);
                }
                return res.json({ message: 'Order updated!' });
            });

        });
    };

    module.exports = orderHelper;

})();
