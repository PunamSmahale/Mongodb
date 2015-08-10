//*Sample Code to simply connect to node server that is listening on port 4545

var http = require("http");

var server = http.createServer(function( request, response){
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.end("Hello, World");
});

server.listen(4545);
