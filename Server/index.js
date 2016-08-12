var express = require('express');  //request npm packages
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString =
'postgres://postgres@localhost/psychology'; //connection string to massive

var app = module.exports = express();  //set app equal to exporting express and express invoked
var massiveInstance = massive.connectSync({
  connectionString: connectionString
}); //an instance of massive is equal to object with connection string
app.set('db', massiveInstance); //allowing app to use massive
var db = app.get('db');
app.use(bodyParser.json());  //initialize bodyParser and cors
app.use(cors());
app.use(express.static(__dirname + './../Public'));
//controllers
var userCtrl = require('./controllers/userCtrl.js');  //require controllers
var assessmentsCtrl = require('./controllers/assessmentsCtrl.js');
var resultsCtrl = require('./controllers/resultsCtrl.js');

//endpoints
app.get('/user/:id', userCtrl.getUser);  //get user by id - login
app.post('/user', userCtrl.postUser);  //post user - create new account
app.get('/assessments', assessmentsCtrl.getAssessments);  //get all assessments - see assessments
app.get('/questions/:assessmentid', assessmentsCtrl.getQuestions);  //get asssessment by id and assessments by id joined to score - see picked assessment and results
app.get('/results/:id', resultsCtrl.getResults);  //post results - add results to server

app.listen(3000, function() {
  console.log('listening on port 3000');  //listening to port 3000 through nodemon
});
