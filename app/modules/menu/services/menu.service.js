/**
 * @author Brenden Palmer
 * @name Reception.menu.MenuService
 * @ngdoc service
 */

;(function () {
    'use strict';

    angular.module('Reception.menu')
        .service('MenuService', function (
            ApiService,
            Request
        ) {
            /**
             * @ngdoc method
             * @methodOf Reception.invite.InviteService
             * @name acceptInvite
             * @description
             * Gets the menu
             * @returns {HttpPromise}
             */
            this.getMenu = function () {
                return Request.get(ApiService.constructUrl('/menu'));
            };

            /**
             * @name selectEntree
             * @param {Object} entree The entree object
             * @description
             * Selects an entree
             * @returns HttpPromise}
             */
            this.selectEntree = function (entree) {
                return Request.put(ApiService.constructUrl('/menu/entree'), {
                    entreeId: entree.id
                });
            };

            return this;
        });
})();
