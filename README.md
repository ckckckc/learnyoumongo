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

The `find` example is in the <a href="./find/find.js">file</a> and <a href="./find/find_project.js">this file</a>.

### db.collection.find()

`db.collection.find(query, projection)`

#### query

Optional. Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}).
  
#### projection

Optional. Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. For details, see Projection.

```
db.collection('parrots').find({
  "age"  : {$gt : age}
}, {
  "name" : 1,
  "age"  : 1,
  "_id"  : 0
})
```
Just like

```
SELECT name, age 
FROM parrots 
WHERE age >= $age
```

`$gt` equals `>`, `$gte` equals `>=`

Source
---
 [learnyoumongo](https://github.com/evanlucas/learnyoumongo)