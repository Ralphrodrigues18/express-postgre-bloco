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
router.post("/notas", authMiddleware, notasController.criaNotas);

router.get("/listas", authMiddleware, notasController.listarItens);

router.get("/detalhes/:id", authMiddleware, notasController.detalhesItem);

router.put("/atualizacao/:id", authMiddleware, notasController.atualizacao);

router.patch("/atualiza/:id", authMiddleware, notasController.atualiza);

router.delete("/deleta/:id", authMiddleware, notasController.deletarItem);

export default router