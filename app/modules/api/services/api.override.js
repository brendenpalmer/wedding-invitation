/**
 * @author Brenden Palmer
 * @name Reception.api
 */

;(function () {
    'use strict';

    angular.module('Reception.api')
        .run(function (
            ApiService
        ) {
            //Override the API URL for local development
            ApiService.setApiUrl('http://localhost:8000');
        });
})();
