import bcrypt from 'bcrypt';
import User from '../models/usuario.js';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
    const { name, email, password } = req.body;

    // Regex para validação de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Pelo menos 1 letra maiúscula, pelo menos 1 caractere especial e no mínimo 8 caracteres
    const senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=\[\]{}|\\:;"'<>,.?/~`]).{8,}$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Email inválido" });
    }

    if (!senhaRegex.test(password)) {
        return res.status(400).json({ message: "Senha inválida. A senha deve conter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial." });
    }

    // Verifica se o email já foi cadastrado
    const existingUser = await User.findOne({ where: {email} });
    if (existingUser) {
        return res.status(400).json({ message: "E-mail já cadastrado" });
    }

    // Criptografa a senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Cria novo usuário
    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    await newUser.save();

    return res.status(201).json({ message: "Usuário registrado com sucesso"});
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Complete todos os campos" });
    }

    // Regex para validação de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Pelo menos 1 letra maiúscula, pelo menos 1 caractere especial e no mínimo 8 caracteres
    const senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=\[\]{}|\\:;"'<>,.?/~`]).{8,}$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Email inválido" });
    }

    if (!senhaRegex.test(password)) {
        return res.status(400).json({
            message: "Senha inválida. A senha deve conter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial."
        });
    }

    // Verifica se o usuário existe
    const user = await User.findOne({ where: {email} });
    if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Verifica se a senha está correta
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Senha incorreta" });
    }

    // Gera token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return res.status(200).json({ message: "Login bem-sucedido", token });
};


export default { register, login };