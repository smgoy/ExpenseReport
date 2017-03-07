'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Expenses',
      'userId',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Expenses', 'userId');
  }
};
