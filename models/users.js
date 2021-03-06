const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
  }
  );

  User.associate = function (models) {
    User.hasMany(models.Malware, {
      foreignKey: 'user_id',
    })
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

  User.prototype.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return callback(err);
      callback(null, isMatch);
    })
  }

  return User;
};
