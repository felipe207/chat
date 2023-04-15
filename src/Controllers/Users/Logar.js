const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../../Schemas/User');

async function LockManager(body){
    const email = body.email;
    const senha = body.senha;

    if (!email || !senha) {
        return { erro: "Dados insuficientes."}
    }


Find = await User.find({ email, senha})
    .then(response => {
        return response;
    }).catch(erro=>{
        return {erro:erro}
    });

    if (Find == '' || Find.erro) {
        return { erro: "E-mail ou senha incorretos."}
    } 

    Token = await jsonwebtoken.sign({
        id:Find[0]._id,
        nome:Find[0].nome,
        emaild:Find[0].email
    }, 'SenhaParaProtegerOToken');

    res.cookie('Token', token);
    res.sendStatus(200);
}

module.exports = Logar;
