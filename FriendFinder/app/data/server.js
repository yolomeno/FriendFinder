var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var PORT = 8080;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});