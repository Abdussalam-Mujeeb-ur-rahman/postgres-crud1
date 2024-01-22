const Sequelize = require('sequelize');

// create an instance of the sequelize
const sequelize = new Sequelize(
    process.env.DB, // the db we want to connect to
    process.env.USER, // the user name
    process.env.PASSWORD, // the password
    {
        host: process.env.HOST, // to create the connection between the database and application running in the container
        dialect: 'postgres',
    }
);

// export the created sequelize instance
module.exports = sequelize;