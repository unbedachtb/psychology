var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy; //request npm packages
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString =
    'postgres://postgres@localhost/psychology'; //connection string to massive?

// var session = require('express-session');

var app = module.exports = express();
//set app equal to exporting express and express invoked

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

var massiveInstance = massive.connectSync({
    connectionString: connectionString
}); //an instance of massive is equal to object with connection string...do I need to understand why all of this is happening?
app.set('db', massiveInstance); //allowing app to use massive
var db = app.get('db');
app.use(bodyParser.json()); //initialize bodyParser and cors
app.use(cors());
app.use(express.static(__dirname + './../Public'));

passport.use(new Strategy(
    function(username, password, cb) {
        db.users.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                return cb(err);
            }
            if (!user) {
                return cb(null, false);
            }
            if (user.password != password) {
                return cb(null, false);
            }
            return cb(null, user);
        });
    }));

passport.serializeUser(function(user, cb) {
    console.log("serializing...", user);
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    console.log("deserializing...", id);
    db.users.findOne({
        id: id
    }, function(err, user) {
        console.log("finding user for deserialize...", user);
        if (err) {
            console.log("deserialize error: ", err);
            return cb(err);
        }
        cb(null, user);
    });
});


//controllers
var userCtrl = require('./controllers/userCtrl.js'); //require controllers
var assessmentsCtrl = require('./controllers/assessmentsCtrl.js');
var resultsCtrl = require('./controllers/resultsCtrl.js');

//endpoints
app.post('/login', passport.authenticate('local', {
        failureRedirect: '/login'
    }),
    function(req, res) {
        // console.log("SUCCESS", req.user);
        res.send(req.user);
    });

//get user by id - login
app.post('/user', userCtrl.postUser); //post user - create new account
// app.get('/assessments', assessmentsCtrl.getAssessments); //get all assessments - see assessments
// app.get('/questions/:assessmentid', assessmentsCtrl.getQuestions); //get asssessment by id and assessments by id joined to score - see picked assessment and results
// app.get('/results/:id', resultsCtrl.getResults); //post results - add results to server
app.post('/results', resultsCtrl.postResults);

//getCurrentUser
// app.get('/me', userCtrl.getCurrentUser);


app.listen(3000, function() {
    console.log('listening on port 3000'); //listening to port 3000 through nodemon
});
