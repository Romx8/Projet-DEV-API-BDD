const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Leaderboard = sequelize.define('Leaderboard', {
  niveau_max: DataTypes.INTEGER,
});

module.exports = Leaderboard;
