var express = require('express');
const path = require('path')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/css'));



app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})