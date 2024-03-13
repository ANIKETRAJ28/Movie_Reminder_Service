'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationTicket.init({
    subject: {
      type: DataTypes.STRING,
      require: true
    },
    content: {
      type: DataTypes.STRING,
      require: true
    },
    email: {
      type: DataTypes.STRING,
      require: true,
      validate: {
        isEmail: true
      }
    },
    status: {
      type: DataTypes.ENUM,
      values: ["pending", "booked", "canceled"],
      defaultValue: "pending"
    },
    time: {
      type: DataTypes.TIME,
      require: true
    }
  }, {
    sequelize,
    modelName: 'NotificationTicket',
  });
  return NotificationTicket;
};