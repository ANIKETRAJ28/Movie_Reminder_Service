'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NotificationTickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING,
        require: true
      },
      content: {
        type: Sequelize.STRING,
        require: true
      },
      email: {
        type: Sequelize.STRING,
        require: true
      },
      status: {
        type: Sequelize.ENUM,
        values: ["pending", "booked", "canceled"],
        defaultValue: "pending"
      },
      time: {
        type: Sequelize.TIME,
        require: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NotificationTickets');
  }
};