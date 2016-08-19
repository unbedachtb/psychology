var app = require('../index.js');
var db = app.get('db');
module.exports = {
  login: function(req, res, next) {
    db.get_user(req.body.name, req.body.password, function(err, user) {
      res.status(200).json(user);

    });
  },
  postUser: function(req, res, next) {
    var r = [
      req.body.name,
      req.body.password
    ];
    console.log(r);
    db.post_new_user(r, function(err, users) {
      console.log(users);
      res.status(200).json(req.body);
    });
  }
};
