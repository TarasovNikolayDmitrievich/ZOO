'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tariffs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tariffs.init({
    adult_work: DataTypes.INTEGER,
    adult_week: DataTypes.INTEGER,
    child_work: DataTypes.INTEGER,
    child_week: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tariffs',
  });
  return Tariffs;
};