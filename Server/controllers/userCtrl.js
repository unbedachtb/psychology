var app = require('../index.js');
var db = app.get('db');
module.exports = {
    login: function(req, res, next) {
        db.get_user(req.body.name, req.body.password, function(err, user) {
            // console.log("USER USER USER: ", user);
            // req.session.user = user;
            res.status(200).json(user);
        });
    },
    postUser: function(req, res, next) {
        var postanotheruser = [
            req.body.name,
            req.body.password
        ];
        db.post_new_user(postanotheruser, function(err, users) {
            // console.log(users);
            res.status(200).json(req.body);
        });
    },
      getCurrentUser: function(req, res) {
        res.send(req.user);
      }

};
