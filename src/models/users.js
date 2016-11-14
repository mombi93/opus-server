'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    salt: DataTypes.STRING,
    encrypted_password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    favrs_fulfilled: DataTypes.INTEGER,
    balance: DataTypes.FLOAT,
    description: DataTypes.STRING,
    dob: DataTypes.DATE,
    subject: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        users.hasMany(models.favrs);
        users.hasMany(models.transactions);
        users.hasMany(models.favr_requests);
        users.hasMany(models.favr_comments);
      }
    }
  });
  return users;
};
