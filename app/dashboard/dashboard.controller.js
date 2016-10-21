(function() {
    'use strict';

    angular
        .module('app')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['dataService', 'Pagination', '$state', 'usSpinnerService'];

    /* @ngInject */
    function dashboardController(dataService, Pagination, $state, usSpinnerService) {
        var vm = this;

    }
})();
