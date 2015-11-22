/**
 * @author Brenden Palmer
 * @name Reception.event:InviteController
 * @ngdoc controller
 */

;(function () {
    'use strict';

    angular.module('Reception.invite')
        .controller('InviteController', function (
            AuthService,
            InviteService,
            INVITE_DECLINED_TEXT,
            INVITE_ACCEPTED_TEXT,
            GROOM_FIRST_NAME,
            BRIDE_FIRST_NAME,
            YEAR_OF_WEDDING,
            WEDDING_LOCATION
        ) {
            /**
             * @name user
             * @type {User}
             * @description
             * The reference to the User object from the AuthService
             */
            this.user = AuthService.user;

            /**
             * @name groomName
             * @type {string}
             */
            this.groomName = GROOM_FIRST_NAME;

            /**
             * @name yearOfWedding
             * @type {string}
             */
            this.yearOfWedding = YEAR_OF_WEDDING;

            /**
             * @name weddingLocation
             * @type {string}
             */
            this.weddingLocation = WEDDING_LOCATION;

            /**
             * @name brideName
             * @type {string}
             */
            this.brideName = BRIDE_FIRST_NAME;

            /**
             * @name view
             * @type {Object}
             * @description
             * Whether or not to display some elements in the view
             */
            this.view = {
                viewInviteOpen: false
            };

            /**
             * @name declinedText
             * @type {string}
             * @description
             * The main text that will be displayed if
             * a user declines the invitation
             */
            this.declinedText = INVITE_DECLINED_TEXT;

            /**
             * @name acceptedText
             * @type {string}
             * @description
             * The main text that will be displayed if
             * a user accepts the invitation
             */
            this.acceptedText = INVITE_ACCEPTED_TEXT;

            /**
             * Get the invitation from the InviteService
             */
            InviteService.getInvitation().then(function (res) {
                if (res && res.data) {
                    AuthService.user.rsvp = res.data.isAttending === null ? null : Number(res.data.isAttending);
                    AuthService.user.name = res.data.name;
                    AuthService.user.inviteDescription = res.data.inviteDescription;
                }
            });

            /**
             * @name accept
             * @description
             * Accepts the invite
             */
            this.accept = function () {
                if (this.user.rsvp !== 1) {
                    InviteService.acceptInvite().then(function (res) {
                        if (res && res.data) {
                            AuthService.user.rsvp = res.data.isAttending;
                        }
                    });
                }
            };

            /**
             * @name decline
             * @description
             * Declines the invite
             */
            this.decline = function () {
                if (this.user.rsvp !== 0) {
                    InviteService.declineInvite().then(function (res) {
                        if (res && res.data) {
                            AuthService.user.rsvp = res.data.isAttending;
                        }
                    });
                }
            };
        });
})();
