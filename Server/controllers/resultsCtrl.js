var app = require('../index.js');
var db = app.get('db');
module.exports = {
  postResults: function(req, res, next) {
    var postData = {
      user_id: req.user.id,
      score: req.body.result,
      score_date: req.body.date,
      assessment_id: req.body.num
    };
    db.results.insert(postData, function(err, response) {
      if (err) {
        console.log("DB ERROR: ", err);
      }
      console.log(response);
      res.send(response);
    });
  },
  getResults: function(req, res, next) {
    console.log('kolaches', req.user.id);
    db.get_results_by_user(req.user.id, function(err, results) {
      res.status(200).json(results);
      console.log(req.user.id);
    });
  }
};

// user score date num
