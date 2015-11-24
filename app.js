var express = require('express');
var app = express();
var path = require('path');

var modThree = require('./modules/modThree');



app.use('/static', express.static('./static'));

app.get('/balance', function(req,res,next){
  res.send(modThree.balance() +' '+ modThree.money(100, 1000000) + '\n');
});

app.get('/', function(req,res,next){ 
   console.log('this ran');
   res.sendFile(path.join(__dirname, './index.html'));
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port)
});