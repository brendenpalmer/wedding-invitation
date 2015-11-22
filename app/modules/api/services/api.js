/**
 * @author Brenden Palmer
 * @name Reception.api.ApiService
 * @ngdoc service
 */

;(function () {
    'use strict';

    angular.module('Reception.api', [])
        .service('ApiService', function () {
            /**
             * @name apiUrl
             * @type {string}
             * @description
             * The base API URL
             */
            this.apiUrl = 'http://api.wedding.brendenpalmer.com';

            /**
             * @name setApiUrl
             * @param {string} apiUrl The API URL
             * @description
             * Sets this.apiUrl
             */
            this.setApiUrl = function (apiUrl) {
                this.apiUrl = apiUrl;
            };

            /**
             * @name constructUrl
             * @param {string} path The path
             * @returns {string}
             * @description
             * Constructs a URL given a certain path
             */
            this.constructUrl = function (path) {
                return this.apiUrl + path;
            };

            return this;
        });
})();
