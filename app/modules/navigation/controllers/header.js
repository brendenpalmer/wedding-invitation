/**
 * @author Brenden Palmer
 * @name Reception.navigation:HeaderController
 * @ngdoc controller
 */

;(function () {
    'use strict';

    angular.module('Reception.navigation')
        .controller('HeaderController', function (
            $state,
            AuthService,
            RECEPTION_STATE_NAMES,
            APP_HEADER_TITLE
        ) {
            /**
             * @name this.user
             * @type {User}
             */
            this.user = AuthService.user;

            /**
             * @name this.states
             * @type {Object}
             */
            this.states = RECEPTION_STATE_NAMES;

            /**
             * @name this.view
             * @type {Object}
             */
            this.view = {
                mobileMenuVisible: false
            };

            /**
             * @name this.headerTitle
             * @type {APP_HEADER_TITLE}
             */
            this.headerTitle = APP_HEADER_TITLE;

            /**
             * @name this.logout
             * @description
             * Logs the user out
             */
            this.logout = function () {
                this.user.logout();
                $state.go(RECEPTION_STATE_NAMES.code);
            };
    });
})();
