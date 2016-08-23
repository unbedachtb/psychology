var app = require('../index.js');
var db = app.get('db');
module.exports = {
  postResults: function(req, res, next) {
    db.results.insert({user_id: req.user.id, score: req.body.result}, function(err, response) {
      if (err) {
        console.log("DB ERROR: ", err);
      }
      console.log(response);
      res.send(response);
    });
  }
};
