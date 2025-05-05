import usuarioController from "../controllers/usuarioController";


const notas = async (req, res) => {

    const { titulo, corpo, id_usuario, id_nota } = req.body;

    if (!titulo){
        return res.status(400).json({message: "Insira um título"});
    }

    if (!corpo){
        return res.status(400).json({message: "Insira um corpo a sua anotação"});
    }

    // Verifica se o email já foi cadastrado
    const existingUser = await User.findOne({ where: {email} });
    if (!existingUser){
        return res.status(400).json({message: "Insira um usuario cadastrado"});
    }

    // Cria novo usuário
    const novaNota = new notas({
        name,
        email,
        password: hashedPassword
    });

    await newUser.save();

    return res.status(201).json({ message: "Usuário registrado com sucesso"});
};
