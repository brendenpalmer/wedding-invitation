/**
 * @author Brenden Palmer
 * @name Reception.accommodations:AccommodationsController
 * @ngdoc controller
 */

;
(function () {
    'use strict';

    angular.module('Reception.accommodations')
        .controller('AccommodationsController', function (
            AVAILABLE_ACCOMMODATIONS,
            TABLE_HEADING_OPTIONS
        ) {
            /**
             * @name availableAccommodations
             * @type {Object}
             */
            this.availableAccommodations = AVAILABLE_ACCOMMODATIONS;

            /**
             * @name headingOptions
             * @type {Array}
             */
            this.headingOptions = TABLE_HEADING_OPTIONS;
        });
})();
