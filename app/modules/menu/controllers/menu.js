/**
 * @author Brenden Palmer
 * @name Reception.menu:MenuController
 * @ngdoc controller
 */

;(function () {
    'use strict';

    angular.module('Reception.menu')
        .controller('MenuController', function (
            $scope,
            AuthService,
            MenuService
        ) {
            /**
             * @name _ctrl
             * @private
             */
            var _ctrl = this;

            /**
             * @name user
             * @type {User}
             */
            this.user = AuthService.user;

            /**
             * @name view
             * @type {Object}
             */
            this.view = {
                modalOpen: false
            };

            /**
             * @name entrees
             * @type {Object}
             */
            this.entrees = {
                options: [],
                selected: []
            };

            /**
             * @name entreeSelected
             * @param {Object} entree The entree
             * @description
             * Called when an entree is selected
             */
            this.entreeSelected = function (entree) {
                MenuService.selectEntree(entree).then(function (res) {
                    _ctrl.entrees.selected = res.data;
                });
            };

            /**
             * Get the menu from the service, as well as
             * the user selected entree
             */
            MenuService.getMenu().then(function (res) {
                this.entrees.options = res.data.entrees;
                this.entrees.selected = res.data.selected;
            }.bind(this));
        });
})();
