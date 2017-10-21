// const Mongoclient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoExampleApp', (err, db) => {
    if (err) {
        return console.log('Unable to Connect to Server');
    }
    console.log('Connected to MongoDB Server.');

    db.collection('Todos').insertOne({
        text: 'Call Max',
        completed: true
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert to Todos Collection');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //     name: 'Sriram',
    //     age: 24,
    //     location: 'Chandanagar'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert Users Collection');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.close();
});

