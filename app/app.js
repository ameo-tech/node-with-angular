(function () {

    "use strict";

    angular.module('order-app', ['ngRoute', 'angular-growl'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'modules/order/orders.html',
                controller: 'order-controller'
            });
    }]);

})();