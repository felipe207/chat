const jsonwebtoken = require('jsonwebtoken');

async function Logado(req, res, next) {
    Auth = req.cookie.Token || null;

    if (typeof (Auth) == 'undefined' || Auth == '' || Auth == null) {
        return res.send({
            erro: {
                login: 'Não autorizado.'
            }
        });
    } else {
        try {
            Token = await jsonwebtoken.verify(
                Auth, 'SenhaParaProtegerOToken'
            );
            next();
        } catch (err) {
            return res.send({
                erro: {
                    login: 'Não autorizado'
                }
            });
        }
    }
}
module.exports = Logado;