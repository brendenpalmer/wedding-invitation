/**
 * @author Brenden Palmer
 * @name Reception.navigation
 * @ngdoc overview
 */

;(function () {
    'use strict';

    angular.module('Reception.navigation', []).config(function ($stateProvider) {
        $stateProvider.state('root', {
            parent: '',
            abstract: true,
            views: {
                '@': {},
                'header@': {
                    templateUrl: 'modules/navigation/views/header.html',
                    controller: 'HeaderController',
                    controllerAs: 'header'
                },

                'footer@': {
                    templateUrl: 'modules/navigation/views/footer.html',
                    controller: 'FooterController',
                    controllerAs: 'footer'
                }
            }
        });
    });
})();
