"use strict";
module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define(
    "Types",
    {
      typeName: DataTypes.STRING,
    },
    {}
  );
  Types.associate = function (models) {
    // Types.belongsTo(models.Malware, {
    //   as: 'malware',
    //   foreignKey: 'type_id',
    // })
  };
  return Types;
};
