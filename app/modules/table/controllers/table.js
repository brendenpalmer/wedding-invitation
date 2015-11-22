/**
 * @author Brenden Palmer
 * @name Reception.table:TableController
 * @ngdoc controller
 */

;(function () {
    'use strict';

    angular.module('Reception.table')
        .controller('TableController', function (
            AuthService,
            TableService
        ) {
            /**
             * @name user
             * @type {User}
             */
            this.user = AuthService.user;

            /**
             * @name seats
             * @type {Array}
             */
            this.seats = AuthService.user.table.seats;

            /**
             * @name loading
             * @type {boolean}
             */
            this.loading = true;

            /**
             * @name getTotalNoRsvp
             * @description
             * Returns the total number of seats who have
             * not RSVP'd yet
             * @returns {number}
             */
            this.getTotalNoRsvp = function () {
                var _count = 0;
                if (this.seats && this.seats.length) {
                    for (var i = 0; i < this.seats.length; i++) {
                        if (Number(this.seats[i].isAttending) !== 1) {
                            _count++;
                        }
                    }
                }

                return _count;
            };

            /**
             * @name trackSeat
             * @param {Object} seat
             * @param {number} $index
             * @returns {string}
             */
            this.trackSeat = function (seat, $index) {
                return String(seat.isAttending) + String($index);
            };

            //Get the table
            TableService.getTable().then(function (res) {
                this.seats = res.data.seats || [];
                AuthService.user.table.setSeats(this.seats);
            }.bind(this)).finally(function () {
                this.loading = false;
            }.bind(this));
        });
})();
