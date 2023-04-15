module.exports = function(application){
    application.get('/logado', function(req, res){
      application.src.controllers.homeController.index(application, req, res);
    });

    application.get('/',(req, res) => res.sendFile(
      __dirname+'/views/login.html'
    ))


    application.post('/api/users/logar',async (req, res) => {
      res.send(await Logar(req.body));
    })

    application.post('/api/users/deslogar',async (req, res) => {
      res.send(await Logar(req.body));
    })
  }
  