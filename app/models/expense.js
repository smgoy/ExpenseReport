'use strict';

module.exports = function(sequelize, DataTypes) {
  var Expense = sequelize.define('Expense', {
    date: {
      type: DataTypes.DATETIME,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Expense.belongsTo(models.User);
      }
    }
  });
  return Expense;
};
