import notasServices from "../services/notas-services"

const criaNotas = (req, res) => {
    notasServices.notas(req, res);
}

const listarItens = (req, res) => {
    notasServices.listas(req, res);
}

const detalhesItem = (req, res) => {

}
const atualizacao = (req, res) => {

}
const atualiza = (req, res) => {

}

const deletarItem = (req, res) => {

}


export default {criaNotas,listarItens, detalhesItem, atualizacao, atualiza,deletarItem}