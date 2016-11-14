'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      salt: {
        type: Sequelize.STRING
      },
      encrypted_password: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      favrs_fulfilled: {
        type: Sequelize.INTEGER
      },
      balance: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      subject: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
