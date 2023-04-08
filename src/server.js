const express = require('express')
const path = require('path')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, '../public')))
app.set('views', path.join(__dirname, '../public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


let messages = []

io.on('connection', socket => {
    console.log(socket.id);

    socket.emit('previousMessages', messages)

    socket.on('sendMessage', data => {
        messages.push(data)

        socket.broadcast.emit('recievedMessage', data)
    })
})

app.get('/', (req, res) => {
    res.render('index.html')
    // res.render('chat_app.html')
})

app.get('/index-velha', (req, res) => {
    res.render('index-velha.html')
    // res.render('chat_app.html')
})

server.listen(3000)