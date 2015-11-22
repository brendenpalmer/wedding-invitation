/**
 * @author Brenden Palmer
 * @name Reception.ui.modal:modal
 * @ngdoc directive
 */

;(function () {
    'use strict';

    angular.module('Reception.menu')
        .directive('receptionMenu', function () {
            return {
                restrict: 'E',
                templateUrl: 'modules/menu/directives/views/reception.menu.html',
                scope: {},
                bindToController: {
                    entrees: '=',
                    userSelectedEntree: '=',
                    entreeSelectedCallback: '='
                },
                controllerAs: 'foldingMenu',
                controller: function (MENU_OPTIONS) {
                    /**
                     * @name view
                     * @type {Object}
                     */
                    this.view = {
                        menuOpened: false
                    };

                    /**
                     * @name menuOptions
                     * @type {Object}
                     */
                    this.menuOptions = MENU_OPTIONS;
                }
            };
        });
})();
