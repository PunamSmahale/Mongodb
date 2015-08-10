/*
Express.js to connect to server listening on port 8000
2 Routes defined
Route 1 ; when //localhost:8000/ returns Hello, World on express
Route 2 : any routes other then above returns Page not found error.
*/

var express = require('express'),
        app = express();
 	
app.get("/", function(request, response){
 	response.send("Hello, World on express")
 });
 
app.get('*', function(request, response){
 	response.send("Page not found error");
 });

app.listen("8000");
