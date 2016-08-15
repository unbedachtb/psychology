var app = require('../index.js');
var db = app.get('db');
module.exports = {
  getAssessments: function(req, res, next) {
    db.get_all_assessments(function(err, assessments) {
      res.status(200).json(assessments);
    });
  },
  getAssessment: function(req, res, next) {

  },

    getQuestions: function(req, res, next) {
      db.get_questions_joined_to_assessment(req.params.assessmentid, function(err, questions) {
        console.log(questions);
        res.status(200).json(questions);
      });
  }

};
