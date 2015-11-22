/**
 * @author Brenden Palmer
 * @name Reception.user.User
 * @ngdoc service
 */

;(function () {
    'use strict';

    angular.module('Reception.user', [
            'Reception.auth',
            'Reception.event',
            'Reception.table.factory'
        ])
        .factory('User', function (
            AuthService,
            EventCollection,
            Table
        ) {
            /**
             * @ngdoc method
             * @methodOf Reception.user.User
             * @name User
             * @constructor
             */
            function User() {
                this.isAuthenticated = AuthService.isAuthenticated();
                this.name = '';
                this.rsvp = null;
                this.inviteDescription = '';
                this.token = AuthService.getToken();
                this.eventCollection = new EventCollection();
                this.table = new Table();
            }

            /**
             * @name isDinnerGuest
             * @description
             * Whether or not the user is a dinner guest
             * @returns {boolean}
             */
            User.prototype.isDinnerGuest = function () {
                return Boolean(this.table.isTableSet() === true && this.table.id !== null && isFinite(this.table.id) === true);
            };

            /**
             * @name setToken
             * @param {string} token The token
             * @description
             * Sets the token
             */
            User.prototype.setToken = function (token) {
                this.token = token;
                AuthService.setToken(token);
                this.isAuthenticated = AuthService.isAuthenticated();
            };

            /**
             * @name logout
             * @description
             * Logs the user out
             */
            User.prototype.logout = function () {
                AuthService.removeToken();
                this.token = null;
                this.isAuthenticated = AuthService.isAuthenticated();
                this.table = new Table();
                this.eventCollection = new EventCollection();
            };

            return User;
        });
})();
