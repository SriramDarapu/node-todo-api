const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoExampleApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    db.collection('Users').findOneAndUpdate(
    {
        _id: new ObjectID('59eb1dfa474cb4ec38b3be5b')
    }, {
        $set: {
            name: 'Srikanth'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(
        (res) => {
            console.log(res);
        }
    )
})