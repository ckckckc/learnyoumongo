var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db){
  if (err) throw err;
  
  var prices = db.collection('prices');

  prices.aggregate([
    {
      $match: { 
        "size": process.argv[2]
      }
    },
    {
      $group: {
        _id: null,
        avg: {
          $avg: '$price'
        }
      }
    }
  ]).toArray(function(err, results) {
    if (err) console.log(err);
    
    if (!results.length) throw new Error('Empty Result');

    console.log(Number(results[0].avg).toFixed(2));

    db.close();
  });
});


// SOLUTION
// var mongo = require('mongodb').MongoClient
// var size = process.argv[2]
// 
// var url = 'mongodb://localhost:27017/learnyoumongo'
// 
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var prices = db.collection('prices')
//   prices.aggregate([
//     { $match: {
//       size: size
//     }}
//   , { $group: {
//       _id: 'average'
//     , average: {
//         $avg: '$price'
//       }
//     }}
//   ]).toArray(function(err, results) {
//     if (err) throw err
//     if (!results.length) {
//       throw new Error('No results found')
//     }
//     var o = results[0]
//     console.log(Number(o.average).toFixed(2))
//     db.close()
//   })
// })