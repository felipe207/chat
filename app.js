const consign = require('consign');

// const { MongoClient } = require('mongodb');
// const dbConfig = require('./db');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/Pages', express.static(__dirname+'/Pages'));

// const Database = require('./Database');

// const Logar = require('./Controllers/Users/Logar');
// const Logado = require('./Controllers/Users/Logado');
// const Deslogar = require('./Controllers/Users/Deslogar');

// const client = new MongoClient(dbConfig.url, dbConfig.options);
// client.connect(err => {
//   if (err) {
//     console.log('Erro ao conectar-se ao banco de dados:', err);
//     return;
//   }

//   console.log('Conectado com sucesso ao banco de dados!');

//   // Aqui você pode inserir, atualizar ou consultar dados no banco de dados
// });
consign()
  .include('src/Routes')
  .then('src/Models')
  .then('src/Controllers')
  .then('src/Controllers/Users')
  .then('src/Database')
  .into(app);

app.listen(3000, function(){
  console.log('APP rodando na porta 3000');
});