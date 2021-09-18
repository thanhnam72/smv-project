'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false
    },
    username: DataTypes.STRING(100),
    password: DataTypes.STRING(200),
    email: DataTypes.STRING(100),
    token: DataTypes.STRING(200)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};