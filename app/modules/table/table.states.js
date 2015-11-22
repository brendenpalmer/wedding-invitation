/**
 * @author Brenden Palmer
 * @name Reception.table
 * @ngdoc overview
 */

;(function () {
    'use strict';

    angular.module('Reception.table', [])
        .config(function (
            $stateProvider,
            RECEPTION_STATE_NAMES
        ) {
            $stateProvider.state(RECEPTION_STATE_NAMES.table, {
                parent: 'root',
                url: '/table',
                title: 'Table',
                views: {
                    'main@': {
                        templateUrl: 'modules/table/views/table.html',
                        controller: 'TableController',
                        controllerAs: 'table'
                    }
                }
            });
        });
})();
