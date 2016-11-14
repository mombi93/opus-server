'use strict';
module.exports = function(sequelize, DataTypes) {
  var favrs = sequelize.define('favrs', {
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    favr_type_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    rating: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        favrs.belongsToMany(models.favr_types);
        favrs.belongsTo(models.users);
      }
    }
  });
  return favrs;
};
