const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Pictures }) {
      // define association here
      this.hasMany(Pictures, ({ foreignKey: 'animal_id' }));
      // this.belongsTo(Pictures, ({ foreignKey: 'main_pic_id' }));
    }
  }
  Animals.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    main_pic_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Animals',
  });
  return Animals;
};
