const mongoose = require('mongoose');

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect('mongodb://localhost:27017/chat')
    .then(() => {
        console.log('mdb online');
    }).catch(erro => {
        console.log(erro);
    });

db = mongoose.connection;

module.exports = db;