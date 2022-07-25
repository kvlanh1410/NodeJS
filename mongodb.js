const mongodb = require('mongodb')

const mongodbClient = mongodb.MongoClient

const connectURl = 'mongodb://127.0.0.1:27017'

const dbName = 'task-manager'

mongodbClient.connect(connectURl, {useNewUrlParser: true}, (err, client) => {
    if(err){
        console.log("Unable to connect to MongoDB")
    }
    console.log("Connected to MongoDB")
    const db = client.db(dbName)

    db.collection('users').insertOne(
        {
            name: 'Andrew',
            age: 27
        }
    )
})
