var http = require('http');
var path = require('path');
var url = require('url');
var express = require('express');
var app = express();
var request = require('request');

request({
    url: 'http://developer.mbta.com/lib/rthr/red.json',
    headers: {
        'Connection': 'keep-alive',
	'Content-Type': 'application/json'
    }
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body);
	app.get('/redline.json', function(request, response) {
		result = JSON.parse(body);
		response.json(result);
	});
    }
});
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});