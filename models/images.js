
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("images", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            path: DataTypes.INTEGER,
            malware_id: DataTypes.STRING,
        },
        {}
    );

    Image.associate = function (models) {
    };
    return Image;
};
