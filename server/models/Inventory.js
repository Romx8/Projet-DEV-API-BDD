const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Inventory = sequelize.define('Inventory', {
  objet: DataTypes.STRING,
});

module.exports = Inventory;
