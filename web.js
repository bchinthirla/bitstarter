var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // Read in buffer from index.html
  var buffer = fs.readFileSync("index.html");
  // convert buffer returned to string
  var line = buffer.toString();
  // send out line instead of previous value
  response.send(line);
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
