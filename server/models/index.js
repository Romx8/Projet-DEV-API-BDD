const sequelize = require('../config/db');
const User = require('./User');
const Stats = require('./Stats');
const Inventory = require('./Inventory');
const Leaderboard = require('./Leaderboard');

// Relations
User.hasOne(Stats);
Stats.belongsTo(User);

User.hasMany(Inventory);
Inventory.belongsTo(User);

User.hasOne(Leaderboard);
Leaderboard.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Stats,
  Inventory,
  Leaderboard,
};
