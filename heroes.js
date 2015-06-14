var MongoClient = requre('mongodb').MongoClient
, assert = require('assert');

var url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err,db) {
	assert.equal(null,err);
	console.log("Connected correctly to server");
	db.close();
});

db.collection.find()