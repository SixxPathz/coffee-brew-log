'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Brew.init({
    beans: DataTypes.STRING,
    method: DataTypes.STRING,
    coffeeGrams: DataTypes.FLOAT,
    waterGrams: DataTypes.FLOAT,
    rating: DataTypes.INTEGER,
    tastingNotes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Brew',
  });
  return Brew;
};