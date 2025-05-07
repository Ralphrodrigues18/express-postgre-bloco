import notasServices from "../services/notas-services"

const criaNotas = (req, res) => {
    notasServices.notas(req, res);
}

const listarItens = (req, res) => {
    notasServices.listas(req, res);
}

const detalhesItem = (req, res) => {
    notasServices.procuraNota(req, res);
}
const atualizaItem = (req, res) => {
    notasServices.atualizaNota(req, res);
}
const corrigirItem = (req, res) => {
    notasServices.corrigeNota(req, res);
}

const deletarItem = (req, res) => {
    notasServices.deletaNota(req, res);
}


export default {criaNotas,listarItens, detalhesItem, atualizaItem, corrigirItem ,deletarItem}