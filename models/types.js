"use strict";
module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define(
    "Types",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      typeName: DataTypes.STRING,
    },
    {}
  );
  Types.associate = function (models) {
    //Types.belongsTo(models.Malware)
  };
  return Types;
};
