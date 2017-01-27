# learnyoumongo

These are codes about learning mongodb from [learnyoumongo](https://github.com/evanlucas/learnyoumongo).

Every .js file contains my solution and standard solution.

## Connect

Start mongod on port 27017 with data as the dbpath

Create the data directory.

`mkdir data`

To start mongo on port 27017, run 

`mongod --port 27017 --dbpath=./data.`

Then, in another terminal, run 

`npm install mongodb.`


## Search for Documents

To get a collection, one can use 

`db.collection('<collection name>').`


To find a document or documents, one needs to call `find()` on the `collection`.

The `find` example is in the <a href="./find/find.js">find</a> file.


Source
---
 [learnyoumongo](https://github.com/evanlucas/learnyoumongo)