/**
 * @author Brenden Palmer
 * @name Reception.accommodations.CONSTANTS
 */

;(function () {
    'use strict';

    angular.module('Reception.accommodations')
        .constant('TABLE_HEADING_OPTIONS', Object.freeze([
            'Room Type',
            'Price (before taxes)'
        ]))
        .constant('AVAILABLE_ACCOMMODATIONS', Object.freeze({
            rooms: [
                {
                    roomType: '1 queen bed',
                    price: '$133'
                },

                {
                    roomType: '2 queen beds',
                    price: '$153'
                },

                {
                    roomType: '1 king bed',
                    price: '$153'
                },

                {
                    roomType: '1 king bed, with Jacuzzi bath',
                    price: '$168'
                }
            ]
        }));
})();
