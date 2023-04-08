module.exports = function(application){
    application.get('/', function(req, res){
      application.src.controllers.homeController.index(application, req, res);
    });
  }
  