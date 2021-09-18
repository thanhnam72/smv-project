'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie.init({
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false
    },
    title: DataTypes.STRING(100),
    url: DataTypes.STRING(255),
    sharedBy: DataTypes.STRING(36)
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};