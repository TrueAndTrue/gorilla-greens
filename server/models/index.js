const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gorillag', 'postgres', 'filler', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize;