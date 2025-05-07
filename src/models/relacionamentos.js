import User from '../models/usuario.js';
import Notas from '../models/notas.js';

// Um usuário pode ter muitas notas
User.hasMany(Notas, {
  foreignKey: 'user_id',
  as: 'notas'
});

// Uma nota pertence a um único usuário
Notas.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'usuario'
});
