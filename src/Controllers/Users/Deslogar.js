async function Deslogar(res) {
    res.clearCookie('Token');
    res.redirect('/');
}

module.exports = Deslogar;