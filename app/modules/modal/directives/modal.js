/**
 * @author Brenden Palmer
 * @name Reception.ui.modal:modal
 * @ngdoc directive
 */

;(function () {
    'use strict';

    angular.module('Reception.ui.modal', [])
        .directive('modal', function () {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'modules/modal/directives/views/modal.html',
                scope: {},
                bindToController: {
                    modalOpen: '='
                },
                controllerAs: 'modal',
                controller: function ($scope) {
                    /**
                     * @name $scope.closeModal
                     * @description
                     * Closes the modal
                     */
                    this.closeModal = function () {
                        this.modalOpen = false;
                        $scope.$applyAsync();
                    };
                }
            };
        });
})();
