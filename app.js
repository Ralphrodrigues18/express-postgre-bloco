/*
POST /[recurso]: cria um novo item

GET /[recurso]: lista todos os itens do usuário autenticado

GET /[recurso]/:id: retorna detalhes de um item

PUT /[recurso]/:id: atualiza todos os dados de um item

PATCH /[recurso]/:id: atualiza parcialmente os dados de um item

DELETE /[recurso]/:id: remove um item
*/

router.post("/notas", notasController.criarNotas);
router.get("/listas", notasController.listarItens);
router.get("/detalhes/:id", notasController.detalhesItem);
router.put("/atualizacao/:id", notasController.atualizacao);
router.patch("/atualiza/:id", notasController.atualiza);
router.delete("/deleta/:id", notasController.deletarItem);







