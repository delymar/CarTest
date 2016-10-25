(function () {
    'use strict';

    angular.module('app')
        .filter('price', price);

    function price() {
        return function (items, price, operator) {
            if(operator != undefined)
                items = items.filter(function (item) {
                    if(operator) return parseInt(item.price.replace('.','')) > price;
                    else return parseInt(item.price.replace('.','')) < price;

                });
            return items;
        }
    }
})();