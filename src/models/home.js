var fs = require('fs');

function home() {}

home.prototype.getLastHome = function(callback) {
  fs.readFile('./data/home.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);

      if (obj.home.length > 4) {
        var i = 4;
      } else {
        var i = (obj.home.length - 1);
      }
    
      obj.home.forEach(function(status) {
        if (i >=  0) {
          data[i] = status;
	  i--;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return home;
}
