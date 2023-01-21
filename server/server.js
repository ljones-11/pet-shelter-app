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
    const dogsCollection = db.collection('dogs');
    const dogsRouter = createRouter(dogsCollection)
    app.use('/api/dogs', dogsRouter)

    const catsCollection = db.collection('cats');
    const catsRouter = createRouter(catsCollection);
    app.use('/api/cats', catsRouter);

    const adoptionCollection = db.collection('adoptionRequests');
    const adoptionRouter = createRouter(adoptionCollection);
    app.use('/api/adoptionRequests', adoptionRouter)
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});


