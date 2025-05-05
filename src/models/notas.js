import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js'; 


const Notas = sequelize.define('Notas', {
    id_nota: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false, 
    },
    id_usuario: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    corpo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  }, {
    tableName: 'notas', 
    timestamps: false, 
  });