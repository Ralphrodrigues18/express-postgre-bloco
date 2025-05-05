import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/routes.js';
import sequelize from './src/database/db.js'; 
import User from './src/models/usuario.js';

dotenv.config(); 


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi bem-sucedida.');

    await sequelize.sync(); 
    console.log('Modelos sincronizados.');

  } catch (error) {
    console.error('Erro ao conectar com o banco de dados: ', error);
  }
})();

const app = express();
//json
app.use(express.json());
app.use(router);


app.listen(8080)
