(function () {
    'use strict';

    angular.module('app')
        .filter('categoryFilter', categoryFilter);

    function categoryFilter() {
        return function (items, category) {
            if(category || category != undefined)
                items = items.filter(function (item) {
                    return _.includes(item.categories, category);
                });
            return items;
        }
    }
})();