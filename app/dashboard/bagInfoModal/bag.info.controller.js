/**
 * Created by Delymar on 23/10/2016.
 */

(function() {
    'use strict';
    var app = angular.module('app')
        .controller('bagInfoController', ['$scope', '$uibModalInstance',  'apiService', 'items', 'toastr',
            function ($scope, $uibModalInstance, apiService, items, toastr) {
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
                    AddProductModal: function(){
                        toastr.success('El producto se agrego a la Bolsa');
                        $uibModalInstance.close();
                    }
                };

            }]
        );
})();