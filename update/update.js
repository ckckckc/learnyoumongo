var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function(err, db){
  if (err) throw err;
  
  var user = db.collection('users');
  
  user.update({
    "name" : "Tina"
  }, {
    $set: {
      "age": 40
    }
  }, function(err) {
    if (err) throw err;
    db.close();
  });
});


// SOLUTION
// var mongo = require('mongodb').MongoClient
// 
// var url = 'mongodb://localhost:27017/' + process.argv[2]
// mongo.connect(url, function(err, db) {
//   if (err) throw err
  // var collection = db.collection('users')
  // collection.update({
  //   username: 'tinatime'
  // }, {
  //   $set: {
  //     age: 40
  //   }
  // }, function(err) {
  //   if (err) throw err
  //   db.close()
  // })
// })