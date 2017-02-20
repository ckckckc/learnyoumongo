var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var age = Number(process.argv[2]);

mongo.connect(url, function(err, db) {
  if (err) throw err;

  db.collection('parrots')
    .find({
      "age": {$gt: age}
    })
    .toArray(function(err, documents) {
      if (err) throw err;
      console.log(documents);
      db.close();
    });
});

// SOLUTION
// var mongo = require('mongodb').MongoClient
// var age = process.argv[2]
// 
// var url = 'mongodb://localhost:27017/learnyoumongo'
// 
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var parrots = db.collection('parrots')
//   parrots.find({
//     age: {
//       $gt: +age
//     }
//   }).toArray(function(err, docs) {
//     if (err) throw err
//     console.log(docs)
//     db.close()
//   })
// })