//*Code below for connecting to MongoDb and display first document from database test ******

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/test", function name(err, db) {
  if(err) throw err;
 	
 	db.collection("names").findOne({}, function(err, doc){
 		if(err) throw err;
 		console.dir(doc);
 		db.close();
 	});
 	
	console.log("Called the mongoClient");
 });
