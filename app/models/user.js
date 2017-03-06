'use strict';
var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 8,
          msg: "Your password must be atleast 8 characters long"
        }
      }
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Expense, {
          foreignKey: 'userId',
          as: 'expenses'
        });
      }
    },
    hooks: {
      afterValidate: function(user) {
        var password = user.password;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        user.password = hash;
      }
    },
    instanceMethods: {
		    verifyPassword: function(password) {
			       return bcrypt.compareSync(password, this.password);
		    }
    }
  });
  return User;
};
