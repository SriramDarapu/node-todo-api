const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoExampleApp', (err, db) => {
    if(err) {
        return console.log("Unable to Connect to mongodb server", err);
    }
    db.collection('Users').findOneAndDelete(
        {
            _id: new ObjectID('59ea3421fb0c121e04de0d88')

        }
    ).then(
        (docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        },
        (err) => {
            console.log('Unable to fetch docs from collection Users', err);
        }
    )
});