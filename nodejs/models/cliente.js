'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Cliente.hasMany(models.Cartao,{
      foreignKey: 'ClienteId', as: 'cartao_cliente'
    });
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};

