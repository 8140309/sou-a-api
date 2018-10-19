var config = require('./config.js');
 var express = require('express'),
	 app = express(),
	 port = process.env.PORT || 3000,
	 mongoose = require('mongoose'),
	 bodyParser = require('body-parser');

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 var batatasModel = require('./api/models/batatasModel');
 var batatasRoute = require('./api/routes/batatasRoute');
 batatasRoute(app);
 var tasksModel = require('./api/models/tasksModel');
 var tasksRoute = require('./api/routes/tasksRoute');
 tasksRoute(app);
 var filmesModel = require('./api/models/filmesModel');
 var filmesRoute = require('./api/routes/filmesRoute');
 filmesRoute(app);
 var actorsModel = require('./api/models/actorsModel');
 var actorsRoute = require('./api/routes/actorsRoute');
 actorsRoute(app);

 mongoose.Promise = global.Promise;
 const connection = mongoose.connect('mongodb+srv://fernando:123456Aa@cluster0-sejql.gcp.mongodb.net/movies?retryWrites=true', { useNewUrlParser: true });

 app.listen(port);
 console.log('RESTful API server started on: ' + port);

 app.use(function (req, res) {
	 res.status(404).send({ url: req.originalUrl + ' not found' })
 });