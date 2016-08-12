var app = require('../index.js');
var db = app.get('db');
module.exports = {
  getQuestions: function(req, res, next) {
    db.get_questions_for_assessment(function(err, questions) {
      res.status(200).json(questions);
    });
  }
};
