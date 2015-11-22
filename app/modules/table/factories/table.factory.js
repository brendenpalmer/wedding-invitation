/**
 * @author Brenden Palmer
 * @name Reception.table.factory.Table
 * @ngdoc service
 */

;(function () {
    'use strict';

    angular.module('Reception.table.factory', [])
        .factory('Table', function () {
            /**
             * @ngdoc method
             * @methodOf Reception.table.factory.Table
             * @name Table
             * @constructor
             */
            function Table() {
                this.id = null;
                this.name = null;
                this.seats = [];
                this.hasTable = false;
                this.tableSet = false;
            }

            /**
             * @name setId
             * @param {number} id The table ID
             * @description
             * Sets the ID
             */
            Table.prototype.setId = function (id) {
                this.tableSet = true;
                if (isFinite(id) === true) {
                    this.id = id;
                    this.setHasTable(true);
                } else {
                    this.setHasTable(false);
                }
            };

            /**
             * @name setHasTable
             * @param {boolean} hasTable Whether or not the
             * authenticated user has a table
             * @description
             * Sets hasTable
             */
            Table.prototype.setHasTable = function (hasTable) {
                this.tableSet = true;
                if (hasTable === true || hasTable === false) {
                    this.hasTable = hasTable;
                }
            };

            /**
             * @name isTableSet
             * @returns {boolean}
             * @description
             * Returns whether or not this table has
             * been set
             */
            Table.prototype.isTableSet = function () {
                return this.tableSet;
            };

            /**
             * @name setSeats
             * @param {Array} seats People sitting at the table
             * @description
             * Sets the seats on the Table
             */
            Table.prototype.setSeats = function (seats) {
                this.seats = seats;
            };

            /**
             * @name setName
             * @param {Array} name The name of the table
             * @description
             * Sets the name of the table
             */
            Table.prototype.setName = function (name) {
                this.name = name;
            };

            return Table;
        });
})();
