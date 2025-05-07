import usuarioController from "../controllers/usuarioController.js";
import middle from "../middleware/middle.js";
import jwt from 'jsonwebtoken';
import Notas from "../models/notas.js";
import User from "../models/usuario.js";
import usersServices from "./users-services.js";

// Cria uma nova nota
const notas = async (req, res) => {
    try {
        const { titulo, corpo } = req.body;
        const user_id = req.user?.id;

        if (!titulo|| !corpo) {
            return res.status(400).json({ message: "Ainda existe campo a ser preenchido." });
        }

        const novaNota = await Notas.create({
             user_id, titulo, corpo
            });

        return res.status(201).json({message: "Anotação criada com sucesso.", nota: novaNota});

    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar anotação.", error: error.message });
    }
};

// Lista todas as notas do usuário
const listas = async (req, res) => {
    try {
        const user_id = req.user.id;

        const lista = await Notas.findAll({ 
            where: { user_id }
         });

        if (!lista || lista.length === 0) {
            return res.status(404).json({ message: "Nenhuma anotação encontrada." });
        }

        return res.status(200).json({ message: "Anotações encontradas.", notas: lista});
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar anotações.", error: error.message });
    }
};

// Retorna os detalhes de uma nota específica
const procuraNota = async (req, res) => {
    try {
        const { id_nota } = req.params;

        const nota = await Notas.findOne({
             where: { id_nota }
        });

        if (!nota) {
            return res.status(404).json({ message: "Nota não encontrada." });
        }

        return res.status(200).json({ message: "Nota encontrada.", nota });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao procurar nota.", error: error.message });
    }
};

// Atualiza completamente uma nota (PUT)
const atualizaNota = async (req, res) => {
    try {
        const { id_nota } = req.params;
        const { titulo, corpo } = req.body;

        if (!titulo || !corpo) {
            return res.status(400).json({ message: "Título e corpo são obrigatórios para a atualização." });
        }
        const [atualizadas] = await Notas.update({
             titulo, corpo 
            }, { where: { id_nota } 
        });

        if (atualizadas === 0) {
            return res.status(404).json({ message: "Nota não encontrada ou dados iguais aos existentes." });
        }

        return res.status(200).json({ message: "Nota atualizada com sucesso." });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao atualizar nota.", error: error.message });
    }
};

// Corrige/Atualiza parcialmente uma nota (PATCH)
const corrigirNota = async (req, res) => {
    try {
        const { id_nota } = req.params;
        const dadosAtualizados = req.body;

        if (!dadosAtualizados || Object.keys(dadosAtualizados).length === 0) {
            return res.status(400).json({ message: "Nenhum dado fornecido para atualização." });
        }

        const [corrigidas] = await Notas.update(dadosAtualizados, { where: { id_nota } });

        if (corrigidas === 0) {
            return res.status(404).json({ message: "Nota não encontrada ou dados não atualizados." });
        }

        return res.status(200).json({ message: "Nota corrigida com sucesso." });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao corrigir nota.", error: error.message });
    }
};

// Deleta uma nota
const deletarNota = async (req, res) => {
    try {
        const { id_nota } = req.params;

        const deletadas = await Notas.destroy({ where: { id_nota } });

        if (deletadas === 0) {
            return res.status(404).json({ message: "Nota não encontrada." });
        }

        return res.status(200).json({ message: "Nota deletada com sucesso." });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao deletar nota.", error: error.message });
    }
};

export default {notas, listas, procuraNota, atualizaNota, corrigirNota, deletarNota};
