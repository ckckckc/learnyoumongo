# learnyoumongo

These are codes about learning mongodb from [learnyoumongo](https://github.com/evanlucas/learnyoumongo).

Every .js file contains my solution and standard solution.

## Connect

Start mongod on port 27017 with data as the dbpath

Create the data directory.

`mkdir data`

To start mongo on port 27017, run `mongod --port 27017 --dbpath=./data.`in the terminal.

Install the `mongodb` module:

`npm install mongodb.`

```
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/dbname';

mongo.connect(url, function(err, db) {
  if (err) throw err;

  db.close();
});
```


## Search for Documents

To get a collection, one can use 

`db.collection('<collection name>').`


To find a document or documents, one needs to call `find()` on the `collection`.

The `find` example is in the <a href="./find/">find</a> folder.

### syntax

`db.collection.find(query, projection)`

#### query

Optional. Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}).
  
#### projection

Optional. Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter.

### example:

```
db.collection('parrots').find({
  "age"  : {$gt : age}
}, {
  "name" : 1,
  "age"  : 1,
  "_id"  : 0
})
```

`query`:
`$gt` equals `>`, `$gte` equals `>=`

`projection`:
`1` or `true` to include the field in the return documents.
`0` or `false` to exclude the field.

Just like

```
SELECT name, age 
FROM parrots 
WHERE age >= $age
```


## Insert

### Syntax

```
db.collection.insert(data, callback)
```

### Example

```
db.collection("collectionName").insert({ 
  col1 : value1,
  col2 : value2,
}, function(err, data) {
  // handle error

  // other operations
})
```

Just like

```
INSERT INTO collectionName (col1,col2) 
VALUES(value1, value2);
```

Source
---
 [learnyoumongo](https://github.com/evanlucas/learnyoumongo)