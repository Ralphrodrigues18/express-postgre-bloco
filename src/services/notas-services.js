import usuarioController from "../controllers/usuarioController.js";
import middle from "../middleware/middle.js";
import jwt from 'jsonwebtoken';
import Notas from "../models/notas.js";
import User from "../models/usuario.js";
import usersServices from "./users-services.js";


const notas = async (req, res) => {
    const { titulo, corpo, user_id, id_nota } = req.body;

    if (!titulo){
        return res.status(400).json({message: "Insira um título"});
    }

    if (!corpo){
        return res.status(400).json({message: "Insira um corpo a sua anotação"});
    }

    // Cria novas
    const novaNota =  await Notas.create({
        id_nota, user_id, titulo, corpo
    });
    return res.status(201).json({ message: "Anotação criada com sucesso", notas: novaNota});
};

const listas = async (user_id, res) => {
    const lista = await Notas.findAll({
        where: {user_id: user_id}
    });
    if(!lista){
        return res.status(404).json({message: "Nenhuma lista encontrada."});
    }
    return res.status(200).json({message:"lista do usuário encontrada.", lista: listas});
};

//detalhes/:id retorna detalhes de um item
const  = async (req, res) => {
    const {titulo} = req.body;
    const detalhes = await Notas.findOne({
        where: {titulo: titulo}
    });

    if (!detalhes){
        return res.status(404).json({message: "Titulo não encontrado."});
    }
    return res.status(201).json({message: "Nota encontrada.", });
}

export default {notas, listas, detalhar}