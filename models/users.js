"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      }, {

      }
  );

  User.associate = function (models) {
    // associations can be defined here
  };

  User.beforeCreate((user, options) => {
      return bcrypt.hash(user.password, 10)
          .then(hash => {
              user.password = hash;
          })
          .catch(err => {
              throw new Error();
          });
  });
  return User;
};
