const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('shelter');
    const dogsCollection = db.collection('animals/dogs');
    const dogsRouter = createRouter(dogsCollection)
    app.use('/api/animals/dogs', dogsRouter)

    const catsCollection = db.collection('animals/cats');
    const catsRouter = createRouter(catsCollection);
    app.use('/api/animals/cats', catsRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});


