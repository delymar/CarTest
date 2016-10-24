(function() {
    'use strict';

    angular.module('app')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', 'Pagination', '$state', 'usSpinnerService', '$uibModal', 'apiService'];
    /* @ngInject */
    function dashboardController($scope, Pagination, $state, usSpinnerService, $uibModal, apiService) {
        var vm = this;
        vm.search={};
        vm.objeto=[];
        vm.campo='name';
        vm.campo='price';
        vm.orden = false;

        apiService.getAll().then(
            function success (resp) {
                vm.objeto = resp;
                vm.init = true;
            },
            function error (err) {
                console.log("err",err)
            }
        );

        vm.OrderByNameDesc = function () {
            vm.campo='name';
            vm.orden = false;
        };
        vm.OrderByNameAsc = function () {
            vm.campo='name';
            vm.orden = true;
        };
        vm.OrderByPriceDesc = function () {
            vm.campo='price';
            vm.orden = false;
        };
        vm.OrderByPriceAsc = function () {
            vm.campo='price';
            vm.orden = true;
        };

        vm.findByCategory = function (category) {
            angular.element('#'+category).addClass("active");
            vm.category = category;
        };

        vm.filterGreaterThan = function () {
            angular.element('#filterSmallerThan').removeClass("active");
            angular.element('#filterGreaterThan').addClass("active");
            vm.value = 30000;
            vm.comparator = true;
        };

        vm.filterSmallerThan = function () {
            angular.element('#filterGreaterThan').removeClass("active");
            angular.element('#filterSmallerThan').addClass("active");
            vm.value = 10000;
            vm.comparator = false;
        };

        vm.filterAvailable = function () {
            angular.element('#filterNoAvailable').removeClass("active");
            angular.element('#filterAvailable').addClass("active");
            vm.search.available = true;
        };
        vm.filterNoAvailable = function () {
            angular.element('#filterAvailable').removeClass("active");
            angular.element('#filterNoAvailable').addClass("active");
            vm.search.available = false;
        };

        vm.filterBestSeller = function () {
            angular.element('#filterBestSeller').addClass("active");
            vm.search.best_seller = true;
        };

        vm.reset = function () {
            vm.search = {};
            angular.element('#filterAvailable').removeClass("active");
            angular.element('#filterSmallerThan').removeClass("active");
            angular.element('#filterGreaterThan').removeClass("active");
            angular.element('#filterNoAvailable').removeClass("active");
            angular.element('#filterBestSeller').removeClass("active");
            angular.element('#1').removeClass("active");
            angular.element('#2').removeClass("active");
            angular.element('#3').removeClass("active");
            angular.element('#4').removeClass("active");
            delete vm.comparator;
            delete vm.category;
            delete vm.value;
            delete vm.campo;
            delete vm.orden;

        };
        $scope.actions = {
            OpenProductModal: function (idProduct) {
                //console.log("entro aqui")
                var modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'app/dashboard/modalProductDetails/product-details-modal.html',
                    controller: 'productDetailsController',
                    size: 'md',
                    resolve: {
                        items: function(){
                            var productInfo = {
                                idProduct: idProduct
                            };
                            return productInfo;
                        }
                    }
                })
            },
            OpenBagModal: function (idProduct) {
                //console.log("entro aqui")
                var modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'app/dashboard/modalBag/product-bag-modal.html',
                    controller: 'productBagController',
                    size: 'md',
                    resolve: {
                        items: function(){
                            var productInfo = {
                                idProduct: idProduct
                            };
                            return productInfo;
                        }
                    }
                })
            },
        }
    }
})();
