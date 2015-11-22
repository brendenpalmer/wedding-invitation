/**
 * @author Brenden Palmer
 * @name Reception.auth
 * @ngdoc service
 */

;(function () {
    'use strict';

    angular.module('Reception.auth', ['Reception.local.storage'])
        .service('AuthService', function (
            LocalStorageService,
            LOCAL_STORAGE_TOKEN
        ) {
            /**
             * @name user
             * @type {User | null}
             */
            this.user = null;

            /**
             * @name isAuthenticated
             * @description
             * Whether or not the current user is authenticated
             * @returns {boolean}
             */
            this.isAuthenticated = function () {
                var _token = LocalStorageService.getItem(LOCAL_STORAGE_TOKEN);
                return Boolean(_token);
            };

            /**
             * @name user
             * @param {User} user The user object
             * @description
             * Sets the user
             */
            this.setUser = function (user) {
                this.user = user;
            };

            /**
             * @name getToken
             * @description
             * Gets the token from the local storage service
             */
            this.getToken = function () {
                return LocalStorageService.getItem(LOCAL_STORAGE_TOKEN);
            };

            /**
             * @name setToken
             * @param {string} token The token
             * @description
             * Sets the token
             */
            this.setToken = function (token) {
                LocalStorageService.setItem(LOCAL_STORAGE_TOKEN, token);
            };

            /**
             * @name removeToken
             * @description
             * Removes the token
             */
            this.removeToken = function () {
                LocalStorageService.removeItem(LOCAL_STORAGE_TOKEN);
            };

            return this;
        });
})();
