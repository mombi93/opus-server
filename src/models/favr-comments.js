'use strict';
module.exports = function(sequelize, DataTypes) {
  var favr_comments = sequelize.define('favr_comments', {
    id: DataTypes.INTEGER,
    favr_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        favr_comments.belongsTo(models.favrs);
        favr_comments.belongsTo(models.users);
      }
    }
  });
  return favr_comments;
};
