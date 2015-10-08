(function () {

    "use strict";

    angular.module('order-app')
        .controller('order-controller', orderController);

    orderController.$inject = ['$scope', 'orderService', 'growl'];

    function orderController($scope, orderService, growl) {


        $scope.Orders = [];

        $scope.LoadOrders = function () {

            orderService.getOrders()
                .then(function (orders) {
                    $scope.Orders = orders;
                });
        };

        $scope.ChangeStatus = function (order) {
            orderService.updateOrder(order)
                .then(function (response) {
                    growl.success("Order has been updated");
                }, function () {
                    growl.error("Something went wrong please try again later.");
                });
        };

        $scope.AddOrder = function () {

        };

        $scope.LoadOrders();
    }

})();