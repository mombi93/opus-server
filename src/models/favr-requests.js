'use strict';
module.exports = function(sequelize, DataTypes) {
  var favr_comments = sequelize.define('favr_comments', {
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return favr_comments;
};