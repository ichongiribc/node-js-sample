var http = require('http');

function onRequest(request, response){
	console.log('A visitor made a request: ' + request.url);
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write('Here is your response');
	response.end();
}


http.createServer(onRequest).listen(8080);
console.log("Node app is running at AWS-EC2-localhost: Port 8080");

/**
var fs = require('fs');

fs.writeFileSync('free.txt', 'free as beer, free as life');
console.log(fs.readFileSync('free.txt').toString());
**/

/**
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
	response.send('Hello chiemezie! Welcome to my Node server... :)');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/
