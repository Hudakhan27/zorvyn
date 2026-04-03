const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  role: { type: DataTypes.ENUM('Admin', 'Analyst', 'Viewer'), defaultValue: 'Viewer' },
  status: { type: DataTypes.ENUM('active', 'inactive'), defaultValue: 'active' }
});
module.exports = User;
