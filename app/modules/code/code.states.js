/**
 * @author Brenden Palmer
 * @name Reception.code
 * @ngdoc overview
 */

;
(function () {
    'use strict';

    angular.module('Reception.code', [
            'Reception.ui.modal'
        ])
        .config(function (
            $stateProvider,
            RECEPTION_STATE_NAMES
        ) {
            $stateProvider.state(RECEPTION_STATE_NAMES.code, {
                parent: 'root',
                url: '/',
                title: 'Your Code',
                views: {
                    'main@': {
                        templateUrl: 'modules/code/views/code.html',
                        controller: 'CodeController',
                        controllerAs: 'code'
                    }
                }
            });
        });
})();
