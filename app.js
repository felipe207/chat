// const express = require('express')
// const path = require('path')

// const app = express()
// const server = require('http').createServer(app)
// const io = require('socket.io')(server)

// app.use(express.static(path.join(__dirname, '../public')))
// app.engine('html', require('ejs').renderFile)
// app.set('views', path.join(__dirname, '../public'))
// app.set('view engine', 'html')

// const userController = require('.app/Http/Controllers/HomeController');

// let messages = []

// io.on('connection', socket => {
//     console.log(socket.id);

//     socket.emit('previousMessages', messages)

//     socket.on('sendMessage', data => {
//         messages.push(data)

//         socket.broadcast.emit('recievedMessage', data)
//     })
// })

// app.get('/', (req, res) => {
//     res.render('index.html')
//     // res.render('chat_app.html')
// })

// app.get('/index-velha', (req, res) => {
//     res.render('index-velha.html')
//     // res.render('chat_app.html')
// })

// server.listen(3000)
var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');

consign()
  .include('src/routes')
  .then('src/models')
  .then('src/controllers')
  .into(app);

app.listen(3000, function(){
  console.log('APP rodando na porta 3000');
});