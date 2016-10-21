(function() {

    angular.module('app').config(appConfig);

    appConfig.$inject = ['$stateProvider', 'usSpinnerConfigProvider'];

    function appConfig($stateProvider, usSpinnerConfigProvider) {
        usSpinnerConfigProvider.setDefaults({color: 'blue'});
    }

}());
