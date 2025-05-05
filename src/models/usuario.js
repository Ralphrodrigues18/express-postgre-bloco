import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js'; 

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'usuario', 
  timestamps: false, 
});




export default User;
