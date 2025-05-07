import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './usuario.js';

const Notas = sequelize.define('Notas', {
  id_nota: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios', 
      key: 'id'
    }
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  corpo: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'notas',
  timestamps: true
});


export default Notas;
