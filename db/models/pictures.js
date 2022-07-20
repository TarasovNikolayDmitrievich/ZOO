const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pictures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Animals }) {
      // define association here
      this.belongsTo(Animals, ({ foreignKey: 'animal_id' }));
      // this.hasOne(Animals, ({ foreignKey: 'main_pic_id' }));
    }
  }
  Pictures.init({
    link: DataTypes.STRING,
    animal_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Pictures',
  });
  return Pictures;
};
