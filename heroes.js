var MongoClient = require('mongodb').MongoClient, assert = require('assert');

var url = 'mongodb://localhost:27017/test';

var insertHeroes = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('heroes');
  // Insert some documents
  collection.remove( {}, function(err, result) {
    callback(result);
  });
}

var findHeroes = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('heroes');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    callback(docs);
  });
}

MongoClient.connect(url, function(err,db) {
    assert.equal(null,err);
    findHeroes(db, function(heroes){
        console.dir(heroes);
        db.close();
    });
});
