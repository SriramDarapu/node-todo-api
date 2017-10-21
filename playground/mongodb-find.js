const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoExampleApp', (err, db) => {
    if(err) {
        return console.log("Unable to Connect to mongodb server", err);
    }
    // db.collection('Todos').find({
    //     _id: new ObjectID('59eafd8f909607180ceea1e2')
    // }).toArray().then(
    //     (docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch Todos', err);
    //     }
    // );
    db.collection('Users').find(
        {
            name: 'Sriram'
        }
    ).toArray().then(
        (docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        },
        (err) => {
            console.log('Unable to fetch docs from collection Users', err);
        }
    )
});