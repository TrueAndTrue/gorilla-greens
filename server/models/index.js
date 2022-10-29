const { Sequelize } = require('sequelize');

if (process.env.NODE_ENV == 'production') {
  console.log("GOT IN PRODUCTION")
  const sequelize = new Sequelize({
    database: "d1jq5j0kd7df13",
    username: "nnuhompuozwxpk",
    password: "ac669606a11695137f8bedc5c66faa2ea6efe57a85043bdcbe943170574fa3b5",
    host: "ec2-23-20-140-229.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  });
  module.exports = sequelize;
}

else {
  const sequelize = new Sequelize('gorillag', 'postgres', 'filler', {
    host: 'localhost',
    dialect: 'postgres'
  })
  module.exports = sequelize;
}
