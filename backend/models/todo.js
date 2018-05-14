module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Todo', {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    }, {
      freezeTableName: true,
      paranoid: true,
    },
  );
};

