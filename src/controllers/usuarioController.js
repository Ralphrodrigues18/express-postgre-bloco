import service from'../services/users-services.js';

const salvaConta = (req, res) => {
    service.register(req, res);
}


const liberaLogin = (req, res) => {
    service.login(req, res);
}

export default {liberaLogin, salvaConta}