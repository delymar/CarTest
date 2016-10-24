/**
 * Created by Delymar on 23/10/2016.
 */

(function() {
    'use strict';
    var app = angular.module('app')
        .controller('productBagController', ['$scope', '$uibModalInstance',  'apiService', 'items', 'toastr',
            function ($scope, $uibModalInstance, apiService, items, toastr) {
                var vm = this;
                vm.product={};
                vm.bag=[];
                vm.productCar={};

                $scope.actions = {
                    CloseProductModal: function () {
                        //console.log("entro aqui")
                        $uibModalInstance.close();
                    },
                    CancelProductModal: function(){
                        $uibModalInstance.dismiss('cancel');
                    },
                    AddProductModal: function(producto){
                        apiService.getProducts().then(
                            function success (resp) {
                                $scope.products = resp;
                                _.find($scope.products, function(product){
                                    if(product.id === producto){
                                        $scope.product= product;
                                    }
                                })
                                vm.productCar = JSON.parse(localStorage.getItem("products"));
                                console.log("esto es loq ue guardo parse",vm.productCar)
                                vm.bag.push(vm.productCar);
                                console.log("esto es vm",vm.bag)
                                localStorage.setItem('products', JSON.stringify($scope.product));
                                console.log(localStorage)
                                vm.init = true;
                            },
                            function error (err) {
                                console.log("err",err)
                            }
                        );
                        toastr.success('El producto se agrego a la Bolsa');
                        $uibModalInstance.close();
                    }
                };
                $scope.amounts=[{
                    id:'1',
                    name:'Uno (1)'
                }, {
                    id:'2',
                    name:'Dos (2)'
                },{
                    id:'3',
                    name:'Tres (3)'
                },{
                    id:'4',
                    name:'Cuatro (4)'
                },{
                    id:'5',
                    name:'Cinco (5)'
                }];

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