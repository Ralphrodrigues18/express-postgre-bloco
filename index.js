import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/routes.js';
import sequelize from './src/database/db.js';
import User from './src/models/usuario.js';
import Notas from './src/models/notas.js';
import './src/models/relacionamentos.js'; 
import cors from 'cors';


dotenv.config();

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi bem-sucedida.');

    await sequelize.sync({ force: false });  // Evitar recriação das tabelas
    console.log('Modelos sincronizados e relacionamentos definidos com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados: ', error);
  }
})();

const app = express();
app.use(cors())
app.use(express.json());
app.use(router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
