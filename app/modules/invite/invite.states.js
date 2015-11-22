/**
 * @author Brenden Palmer
 * @name Reception.invite
 * @ngdoc overview
 */

;(function () {
    'use strict';

    angular.module('Reception.invite', [
            'ngSanitize',
            'Reception.ui.modal'
        ])
        .config(function (
            $stateProvider,
            RECEPTION_STATE_NAMES
        ) {
            $stateProvider.state(RECEPTION_STATE_NAMES.invite, {
                parent: 'root',
                url: '/invite',
                title: 'Invite',
                views: {
                    'main@': {
                        templateUrl: 'modules/invite/views/invite.html',
                        controller: 'InviteController',
                        controllerAs: 'invite'
                    }
                }
            });
        });
})();
