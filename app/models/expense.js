'use strict';

module.exports = function(sequelize, DataTypes) {
  var Expense = sequelize.define('Expense', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: DataTypes.TEXT,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Expense;
};
