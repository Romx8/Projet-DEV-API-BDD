const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Stats = sequelize.define('Stats', {
  force: DataTypes.INTEGER,
  magie: DataTypes.INTEGER,
  niveau: DataTypes.INTEGER,
  coeurs: DataTypes.INTEGER,
  or: DataTypes.INTEGER,
});

module.exports = Stats;
