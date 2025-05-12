import usersServices from '../services/users-services.js';

const salvaConta = (req, res) => {
    usersServices.register(req, res);
}


const liberaLogin = (req, res) => {
    usersServices.login(req, res);
}

export default {liberaLogin, salvaConta}