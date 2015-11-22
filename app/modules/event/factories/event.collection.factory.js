/**
 * @author Brenden Palmer
 * @name Reception.event.EventCollection
 * @ngdoc service
 */

;
(function () {
    'use strict';

    angular.module('Reception.event', [])
        .factory('EventCollection', function () {
            /**
             * @name EventCollection
             * @constructor
             */
            function EventCollection() {
                this.events = [];
            }

            /**
             * @name setEvents
             * @param {Array} events The events
             * @description
             * Sets the events on the collection
             */
            EventCollection.prototype.setEvents = function (events) {
                this.events = events;
            };

            return EventCollection;
        });
})();
