import express from 'express';
import usuarioController from '../controllers/usuarioController.js';
import authMiddleware from '../middleware/middle.js';
import protecaoController from '../controllers/protecaoController.js';
import notasController from '../controllers/notasController.js';    



const router = express.Router();

//protecao
router.get("/protected", authMiddleware, protecaoController.protecao);

//usuario
router.post("/register", usuarioController.salvaConta);

router.post("/login", usuarioController.liberaLogin);

//notas
router.post("/notas", notasController.criaNotas);

router.get("/listas", notasController.listarItens);

router.get("/detalhes/:id", notasController.detalhesItem);

router.put("/atualizacao/:id", notasController.atualizacao);

router.patch("/atualiza/:id", notasController.atualiza);

router.delete("/deleta/:id", notasController.deletarItem);

export default router