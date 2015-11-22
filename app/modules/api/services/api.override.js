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
            ApiService.setApiUrl('http://10.0.0.42:8000');
        });
})();
