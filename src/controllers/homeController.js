module.exports.index = function(application, req, res) {
    var homeModel = new application.src.models.home();
  
    homeModel.getLastHome(function(err, result) {
      res.render("home/index", {home : result});
    });
  }
  