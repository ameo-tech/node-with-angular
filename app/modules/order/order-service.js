(function () {

    "use strict";

    angular.module('order-app')
        .service('orderService', orderService);

    orderService.$inject = ['api'];

    function orderService(api) {

        this.getOrders = function () {
            return api.get('/api/orders');
        };

        this.updateOrder = function (order) {
            return api.post('/api/updateOrder', { order: order });
        };
    }

})();