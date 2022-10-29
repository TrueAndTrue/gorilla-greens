const { Sequelize } = require('sequelize');

if (process.env.NODE_ENV === 'production') {
  const sequelize = new Sequelize('d1jq5j0kd7df13', 'nnuhompuozwxpk', 'ac669606a11695137f8bedc5c66faa2ea6efe57a85043bdcbe943170574fa3b5', {
    host: 'ec2-23-20-140-229.compute-1.amazonaws.com',
    dialect: 'postgres'
  })
  module.exports = sequelize;
}

else {
  const sequelize = new Sequelize('gorillag', 'postgres', 'filler', {
    host: 'localhost',
    dialect: 'postgres'
  })
  module.exports = sequelize;
}
