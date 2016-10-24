(function() {
    'use strict';

    angular
        .module('app')
        .directive('headerDirective', headerDirective);

    function headerDirective() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/components/header/header.html',
            controller: headerController,
            controllerAs: 'headerController',
            bindToController: true
        };

        return directive;
    }

    headerController.$inject = ['$state', '$scope', '$window', '$uibModal'];

    /* @ngInject */
    function headerController($state, $scope, $window, $uibModal) {
        var vm = this;
        $scope.navCollapse = false;

        vm.toggleClass = toggleClass;

        function toggleClass() {
            console.log('aaa');
            $scope.navCollapse = !angular.element('#rappi-nav-items').hasClass('rappi-nav-collapse');
            if($scope.navCollapse){
                angular.element('nav').addClass('fixed');
                angular.element('body').addClass('dontScroll');
            }else{
                angular.element('body').removeClass('dontScroll');
                if(angular.element('body').scrollTop() < 30){
                    angular.element('nav').removeClass('fixed');
                }
            }
        }

        $scope.actions = {
            OpenBuyModal: function (idClient) {
                //console.log("entro aqui")
                var modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'app/dashboard/bagInfoModal/bag-info-modal.html',
                    controller: 'bagInfoController',
                    size: 'md',
                    resolve: {
                        items: function(){
                            var bagInfo = {
                                idClient: idClient
                            };
                            return bagInfo;
                        }
                    }
                })
            },
        }
    }
})();