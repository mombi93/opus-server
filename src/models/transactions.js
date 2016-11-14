'use strict';
module.exports = function(sequelize, DataTypes) {
  var transactions = sequelize.define('transactions', {
    id: DataTypes.INTEGER,
    favee_id: DataTypes.INTEGER,
    favr_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        transactions.belongsTo(models.users);
        transactions.belongsTo(models.favrs);
      }
    }
  });
  return transactions;
};
