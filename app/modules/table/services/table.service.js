/**
 * @author Brenden Palmer
 * @name Reception.table.TableService
 * @ngdoc service
 */

;(function () {
    'use strict';

    angular.module('Reception.table')
        .service('TableService', function (
            ApiService,
            Request
        ) {
            /**
             * @ngdoc method
             * @methodOf Reception.table.TableService
             * @name getTable
             * @description
             * Gets the table
             * @returns {HttpPromise}
             */
            this.getTable = function () {
                return Request.get(ApiService.constructUrl('/table'));
            };

            return this;
        });
})();
