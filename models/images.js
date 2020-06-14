
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("images", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            path: DataTypes.INTEGER,
            malware_id: DataTypes.INTEGER,
        },
        {
            timestamps:false,
        }
    );

    Image.associate = function (models) {
    };
    return Image;
};
