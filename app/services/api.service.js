/**
 * Created by Delymar on 23/10/2016.
 */
(function() {
    'use strict'

    angular.module('app').
    factory('apiService', apiService);

    apiService.$inject = ['$http', '$q'];

    function apiService($http, $q) {

        var apiService = {
            getAll: getAll,
            getProducts: getProducts
        };
        return apiService;

        function getAll() {
            var deferred = $q.defer();
            $http.get('/apiData/value.json')
                .success(function(value, status, headers, config) {
                    deferred.resolve(value);
                })
                .error(function(status) {
                    deferred.reject(status);
                });
            return deferred.promise;
        };
        function getProducts() {
            var deferred = $q.defer();
            $http.get('/apiData/value.json')
                .success(function(value, status, headers, config) {
                    deferred.resolve(value.products);
                })
                .error(function(status) {
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    }
})();