var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'israel';

let client;

(async function () {
    client = await MongoClient.connect(url);
})();

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const db = client.db(dbName);
    const peopleCollection = db.collection('people');
    const allPeople = await peopleCollection
        .find()
        .project({ _id: 0 })
        // only when we invoke toArray(), we really retrieve data
        .toArray();
    res.send(allPeople);
});

router.post('/', async (req, res) => {
    const db = client.db(dbName);
    const peopleCollection = db.collection('people');
    const { name, age } = req.body;
    try {
        await peopleCollection.insertOne({
            name,
            age,
        });
        res.send('OK');
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = router;
