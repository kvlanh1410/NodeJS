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

    // db.collection('users').insertOne(
    //     {
    //         name: 'Andrew',
    //         age: 27
    //     }
    // )
    //insert
    // db.collection('users').findOne({_id: new mongodb.ObjectID("62dd536802f71b04bcf31ca6")},(err, result) => {

    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(result)
    // })
    
    db.collection('users').updateOne({_id: new mongodb.ObjectID("62dd536802f71b04bcf31ca6")},{
        $set:{
            name:  "lanh"
        }
    }).then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })

    
})
