
/**
 * Created by Delymar on 27/08/2016.
 */
(function() {
    'use strict';
    var app = angular.module('app')
        .controller('productDetailsController', ['$scope', '$uibModalInstance', 'apiService', 'items',  '$uibModal',

            function ($scope, $uibModalInstance, apiService, items,  $uibModal) {
                var vm = this;
                vm.product={};

                $scope.actions = {
                    CloseProductModal: function () {
                        //console.log("entro aqui")
                        $uibModalInstance.close();
                    },
                    CancelProductModal: function(){
                        $uibModalInstance.dismiss('cancel');
                    },
                    AddProductModal:function(idProduct){
                        $uibModalInstance.close();
                        $scope.actions.OpenBagModal(idProduct);
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
                };
                apiService.getProducts().then(
                    function success (resp) {
                        $scope.products = resp;
                        _.find($scope.products, function(product){
                            if(product.id === items.idProduct){
                                $scope.product= product;
                                console.log("--->",  $scope.product)
                            }
                        })
                        vm.init = true;
                    },
                    function error (err) {
                        console.log("err",err)
                    }
                );

            }]
        );
})();