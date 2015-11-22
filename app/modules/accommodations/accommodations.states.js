/**
 * @author Brenden Palmer
 * @name Reception.accommodations
 * @ngdoc overview
 */

;
(function () {
    'use strict';

    angular.module('Reception.accommodations', [])
        .config(function (
            $stateProvider,
            RECEPTION_STATE_NAMES
        ) {
            $stateProvider.state(RECEPTION_STATE_NAMES.accommodations, {
                parent: 'root',
                url: '/accommodations',
                title: 'Accommodations',
                views: {
                    'main@': {
                        templateUrl: 'modules/accommodations/views/accommodations.html',
                        controller: 'AccommodationsController',
                        controllerAs: 'accommodations'
                    }
                }
            });
        });
})();
