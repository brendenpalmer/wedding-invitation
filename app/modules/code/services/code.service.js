/**
 * @author Brenden Palmer
 * @name Reception.code.CodeService
 * @ngdoc service
 */

;(function () {
    'use strict';

    angular.module('Reception.code')
        .service('CodeService', function (
            ApiService,
            Request
        ) {
            /**
             * @name submitCode
             * @param {string} code The code to submit
             * @description
             * Submits a code using the API service
             * @returns HttpPromise}
             */
            this.submitCode = function (code) {
                return Request.post(ApiService.constructUrl('/code'), {
                    code: code
                });
            };

            return this;
        });
})();
