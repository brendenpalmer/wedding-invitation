/**
 * @author Brenden Palmer
 * @name Reception.menu.CONSTANTS
 */

;(function () {
    'use strict';

    angular.module('Reception.menu')
        .constant('MENU_OPTIONS', Object.freeze({
            appetizers: [
                {
                    name: 'Three Cheese Garlic Bread',
                    description: 'French bread topped with fresh garlic and a hot blend of Cheddar, Jack and Parmesan cheeses.'
                },
                {
                    name: 'Fire-grilled Fresh Artichoke',
                    description: 'Served with house-made Lemon Aioli and our signature Basil Pesto Mayo for dipping.'
                }
            ],
            entrees: [],
            dessert: [
                {
                    name: 'New York-style Cheesecake',
                    description: 'Topped with sweet strawberry sauce.'
                },
                {
                    name: 'Coffee and Tea',
                    description: ''
                }
            ],
            wine: [
                'Two glasses of red wine per person, featuring a selection of California\'s best red wines.'
            ],
            otherBeverages: [
                'Sparkling water, soft drinks, milk, and juice'
            ]
        }));
})();
