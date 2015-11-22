/**
 * @author Brenden Palmer
 * @name Reception.local.storage
 * @ngdoc service
 */

;(function () {
    'use strict';

    angular.module('Reception.local.storage', [])
        .service('LocalStorageService', function () {
            /**
             * @name setItem
             * @param {string} key
             * @param {*} value
             * @description
             * Sets an item in local storage
             */
            this.setItem = function (key, value) {
                window.localStorage.setItem(key, value);
            };

            /**
             * @name getItem
             * @param {string} key
             * @description
             * Gets an item from local storage
             * @returns {string}
             */
            this.getItem = function (key) {
                return window.localStorage.getItem(key);
            };

            /**
             * @name removeItem
             * @param {string} key
             * @description
             * Removes an item from local storage
             */
            this.removeItem = function (key) {
                window.localStorage.removeItem(key);
            };

            return this;
        });
})();
