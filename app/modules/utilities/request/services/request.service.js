/**
 * @author Brenden Palmer
 * @name Reception.request
 * @ngdoc service
 */

;(function () {
    'use strict';

    angular.module('Reception.request', [])
        .service('Request', function (
            $http,
            AuthService,
            $state,
            RECEPTION_AUTH_HEADER,
            RECEPTION_STATE_NAMES
        ) {
            /**
             * @name _request
             * @param {string} method
             * @param {string} url
             * @param {Object} [data]
             * @returns {Promise}
             * @private
             */
            var _request = function (method, url, data) {
                var _requestObj = {
                    method: method.toLowerCase(),
                    url: url,
                    data: data,
                    headers: {}
                };

                if (AuthService.user.token !== null) {
                    _requestObj.headers[RECEPTION_AUTH_HEADER] = AuthService.user.token;
                }

                if (_requestObj.method === 'post') {
                    _requestObj.data = angular.toJson(_requestObj.data);
                }

                var _httpPromise = $http(_requestObj);

                _httpPromise.catch(function (res) {
                    if (res.status === 401) {
                        AuthService.user.logout();
                        $state.go(RECEPTION_STATE_NAMES.code);
                    }
                });

                return _httpPromise;
            };

            /**
             * @name get
             * @param {string} url
             * @returns {Promise}
             */
            this.get = function (url) {
                return _request('GET', url);
            };

            /**
             * @name post
             * @param {string} url
             * @param {Object} data
             * @returns {Promise}
             */
            this.post = function (url, data) {
                return _request('POST', url, data);
            };

            /**
             * @name put
             * @param {string} url
             * @param {Object} data
             * @returns {Promise}
             */
            this.put = function (url, data) {
                return _request('PUT', url, data);
            };

            /**
             * @name delete
             * @param {string} url
             * @returns {Promise}
             */
            this.delete = function (url) {
                return _request('DELETE', url);
            };

            return this;
        });
})();
