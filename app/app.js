/**
 * @author Brenden Palmer
 * @name Reception.constants
 * @ngdoc overview
 */

;(function () {
    'use strict';

    angular.module('Reception', [
        'ngAnimate',
        'templates',
        'ui.router',
        'Reception.navigation',
        'Reception.constants',
        'Reception.code',
        'Reception.invite',
        'Reception.menu',
        'Reception.auth',
        'Reception.local.storage',
        'Reception.request',
        'Reception.user',
        'Reception.table',
        'Reception.accommodations',
        'Reception.api'
    ]).config(function (
        $stateProvider,
        $locationProvider,
        $urlRouterProvider,
        $httpProvider
    ) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }).run(function (
        $rootScope,
        AuthService,
        User,
        $state,
        InviteService,
        APP_TITLE,
        RECEPTION_STATE_NAMES
    ) {
        /**
         * @name _dinnerGuestStates
         * @type {Array}
         * @description
         * States only visible to dinner guests
         * @private
         */
        var _dinnerGuestStates = [
            RECEPTION_STATE_NAMES.table,
            RECEPTION_STATE_NAMES.menu
        ];

        //Set the user in the service
        AuthService.setUser(new User());

        $rootScope.$on('$stateChangeStart', function (event, toState) {
            $rootScope.pageTitle = '';

            if (toState.title) {
                $rootScope.pageTitle += toState.title;
                $rootScope.pageTitle += ' | ';
            }

            $rootScope.pageTitle += APP_TITLE;

            if (AuthService.user.isAuthenticated === false && toState.name !== RECEPTION_STATE_NAMES.code) {
                event.preventDefault();
                $state.go(RECEPTION_STATE_NAMES.code);
            } else if (AuthService.user.isAuthenticated === true && toState.name === RECEPTION_STATE_NAMES.code) {
                event.preventDefault();
                $state.go(RECEPTION_STATE_NAMES.invite);
            } else if (
                AuthService.user.isAuthenticated === true &&
                AuthService.user.table.isTableSet() === true &&
                AuthService.user.isDinnerGuest() === false &&
                _dinnerGuestStates.indexOf(toState.name) > -1
            ) {
                event.preventDefault();
                $state.go(RECEPTION_STATE_NAMES.invite);
            }

            if (AuthService.user.isAuthenticated === true && AuthService.user.table.isTableSet() === false) {
                //Get the users invitation
                InviteService.getInvitation().then(function (res) {
                    if (res && res.data) {
                        AuthService.user.rsvp = res.data.isAttending === null ? null : Number(res.data.isAttending);
                        AuthService.user.name = res.data.name;
                        AuthService.user.inviteDescription = res.data.inviteDescription;
                        AuthService.user.table.setId(res.data.tableId);

                        if (_dinnerGuestStates.indexOf(toState.name) > -1 && AuthService.user.isDinnerGuest() === false) {
                            event.preventDefault();
                            $state.go(RECEPTION_STATE_NAMES.invite);
                        }
                    }
                });
            }
        });
    });
})();
