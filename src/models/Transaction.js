const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Transaction = sequelize.define('Transaction', {
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  type: { type: DataTypes.ENUM('income', 'expense'), allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  description: DataTypes.STRING
});
module.exports = Transaction;
