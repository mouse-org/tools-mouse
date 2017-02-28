var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var request = require('request');
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: process.env.CREATE_PROD_DB_HOST,
	user: process.env.CREATE_PROD_DB_USERNAME,
	password: process.env.CREATE_PROD_DB_PASSWORD,
	database: "Mouse Create Production"
})

connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected ... nn");
	} else {
	    console.log("Error connecting database . . .");
			console.log(err)
	}
});


var app = express();

var port = process.env.PORT || 3000;

if(process.env.environment == 'PRODUCTION'){
	app.get('*',function(req,res,next){
	  if(req.headers['x-forwarded-proto']!='https')
	    res.redirect('https://tools.mouse.org'+req.url)
	  else
	    next()
	})
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res){
	res.sendFile(__dirname + '/templates/index.html');
});

app.listen(port, function(){
  console.log('Gulp is running on PORT: ' + port);
})

module.exports = app;
