(function() {
    'use strict';

    angular
        .module('app', ['ui.router',
            'ngSanitize',
            'ngCookies',
            'ncy-angular-breadcrumb',
            'ngAnimate',
            'ngMessages',
            'toastr',
            'simplePagination',
            'angularSpinner',
            'ui.select',
            'ui.bootstrap'
        ]);
})();
