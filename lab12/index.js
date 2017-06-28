var express = require('express');
var http = require('http');
var app = express();

options = {
	host: 'http://developer.mbta.com/lib/rthr/red.json',
	port: 443,
	path: '/redline.json',
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	}
};

callback = function(response) {
	var str = '';
	response.on('data',function (body) {
		str += body;
	});
	response.on('end',function () {
		console.log(req.data);
		console.log(str);
		response.send(str)
	});
}

var req = http.request(options, callback).end();

app.set('port', (process.env.PORT || 8080));

app.use('/redline.json', express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/redline.json', function(req, res) {
  res.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});