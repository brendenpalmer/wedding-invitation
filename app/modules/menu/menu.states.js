/**
 * @author Brenden Palmer
 * @name Reception.menu
 * @ngdoc overview
 */

;(function () {
    'use strict';

    angular.module('Reception.menu', [])
        .config(function (
            $stateProvider,
            RECEPTION_STATE_NAMES
        ) {
            $stateProvider.state(RECEPTION_STATE_NAMES.menu, {
                parent: 'root',
                url: '/menu',
                title: 'Menu',
                views: {
                    'main@': {
                        templateUrl: 'modules/menu/views/menu.html',
                        controller: 'MenuController',
                        controllerAs: 'menu'
                    }
                }
            });
        });
})();
