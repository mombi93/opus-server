'use strict';
module.exports = function(sequelize, DataTypes) {
  var favr_types = sequelize.define('favr_types', {
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        favr_types.hasMany(models.favrs);
      }
    }
  });
  return favr_types;
};
