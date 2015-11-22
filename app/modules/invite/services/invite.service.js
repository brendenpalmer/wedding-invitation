/**
 * @author Brenden Palmer
 * @name Reception.invite.InviteService
 * @ngdoc service
 */

;(function () {
    'use strict';

    angular.module('Reception.invite')
        .service('InviteService', function (
            ApiService,
            AuthService,
            Request
        ) {
            /**
             * @ngdoc method
             * @methodOf Reception.invite.InviteService
             * @name getInvitation
             * @description
             * Gets the invitation
             * @returns {HttpPromise}
             */
            this.getInvitation = function () {
                var _getInvitation = Request.get(ApiService.constructUrl('/invite'));

                // Get the invitation, then set the events in the event collection
                _getInvitation.then(function (res) {
                    AuthService.user.eventCollection.setEvents(res.data.events);
                });

                return _getInvitation;
            };

            /**
             * @ngdoc method
             * @methodOf Reception.invite.InviteService
             * @name acceptInvite
             * @description
             * Accepts the invite
             * @returns {HttpPromise}
             */
            this.acceptInvite = function () {
                return Request.put(ApiService.constructUrl('/rsvp'), {
                    isAttending: 1
                });
            };

            /**
             * @ngdoc method
             * @methodOf Reception.invite.InviteService
             * @name declineInvite
             * @description
             * Declines the invite
             * @returns {HttpPromise}
             */
            this.declineInvite = function () {
                return Request.put(ApiService.constructUrl('/rsvp'), {
                    isAttending: 0
                });
            };

            return this;
        });
})();
