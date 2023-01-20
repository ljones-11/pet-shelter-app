const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {

    const router = express.Router();

    // handle Index Route GET request for a new pet

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.log(err);
            res.status(500)
            res.json({status: 500, error: err})
        });
    });

     // POST a new pet 

    router.post('/', (req, res) => {
        const newPet = req.body
        collection
        .insertOne(newPet)
        .then((result) => {
            res.json(result.ops[0])
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            res.json({status: 500, error: err})
        });

    });

    // DELETE a pet

    router.delete('/:id', (req, res) => {
        const id = req.params.id
        collection
        .deleteOne({ _id: ObjectID(id) })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            res.json({status: 500, error: err})
        });
    });

    // UPDATE pet using PUT request

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedPet = req.body;
        
        collection
        .updateOne({ _id: ObjectID(id) }, { $set: updatedPet })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            res.json({status: 500, error: err})
        });
    })

    return router
};

module.exports = createRouter;