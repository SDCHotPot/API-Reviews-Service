const Sequelize = require('sequelize');
const postgresDb = require('../postgresConnection');
const Reviews = require('./Reviews');

const Photos = postgresDb.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
  },
  photo: {
    type: Sequelize.STRING,
  },
});

Photos.belongsTo(Reviews);

module.exports = Photos;
