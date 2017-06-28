var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/lab8', express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/lab8', function(req, res) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


