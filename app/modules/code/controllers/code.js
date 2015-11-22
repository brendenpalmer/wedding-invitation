/**
 * @author Brenden Palmer
 * @name Reception.code:CodeController
 * @ngdoc controller
 */

;
(function () {
    'use strict';

    angular.module('Reception.code')
        .controller('CodeController', function (
            ApiService,
            AuthService,
            CodeService,
            $state,
            RECEPTION_STATE_NAMES
        ) {
            /**
             * @name submitCode
             * @param {boolean} $valid Whether or not the submission is valid
             * @description
             * Submits a code
             */
            this.submitCode = function ($valid) {
                if ($valid === true) {
                    CodeService.submitCode(this.view.userCode).then(function (res) {
                        if (res && res.data && res.data.token && res.data.token.length) {
                            this.view.codeError = false;
                            AuthService.user.setToken(res.data.token);
                            if (AuthService.user.isAuthenticated === true) {
                                $state.go(RECEPTION_STATE_NAMES.invite);
                            }
                        } else {
                            this.view.codeError = true;
                        }
                    }.bind(this)).catch(function () {
                        this.view.codeError = true;
                    }.bind(this));
                }
            };

            /**
             * @name view
             * @type {Object}
             */
            this.view = {
                moreInfoOpen: false,
                codeError: false,
                userCode: ''
            };

            /**
             * @name isIE
             * @description
             * Returns whether or not the browser is any version of IE
             * @returns {boolean}
             */
            this.isIE = function () {
                var _ua = window.navigator.userAgent;
                return Boolean(_ua.indexOf('MSIE ') > -1 || _ua.indexOf('Trident/') > -1 || _ua.indexOf('Edge/') > -1);
            };
        });
})();
