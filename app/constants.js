/**
 * @author Brenden Palmer
 * @name Reception.constants
 */

;(function () {
    'use strict';

    angular.module('Reception.constants', [])
        .constant('APP_TITLE', 'Bride & Groom')
        .constant('GROOM_FIRST_NAME', 'Groom')
        .constant('BRIDE_FIRST_NAME', 'Bride')
        .constant('APP_HEADER_TITLE', 'b&g')
        .constant('RECEPTION_STATE_NAMES', Object.freeze({
            invite: 'invite',
            code: 'code',
            menu: 'menu',
            table: 'table',
            accommodations: 'accommodations'
        }))
        .constant('MAIN_CONTACT_EMAIL', 'hello@brendenpalmer.com')
        .constant('LOCAL_STORAGE_TOKEN', 'reception-token')
        .constant('RECEPTION_AUTH_HEADER', 'X-RECEPTION-TOKEN');
})();
