const db = require('../../config/database');

module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    birthday: {
      type: DataTypes.DATEONLY,
    },
  });

  return Client;
};