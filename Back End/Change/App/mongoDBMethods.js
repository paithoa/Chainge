//MongoDB Init

// const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://handy-project:Paithoa301197@cluster0-inunu.gcp.mongodb.net/test";
// const client = new MongoClient(uri);
// const mongoClient = async function(cb) {
// const client = await MongoClient.connect(uri, {
//                  useNewUrlParser: true
//              });
//              cb(client);
// };

    //Bind connection to error event (to get notification of connection errors)
    //db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    //return client;


//MongoDB Methods

module.exports = {
    insertActivity: async function(newListing){
        let result = await client.db("test123").collection("listOfStreaks").insertOne(newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`)
        return result
    },

    deleteActivity: async function(){

    },
    resetStreak: async function(){

    },
    highestStreak: async function(){

    },
    queryActivity: async (client,value) =>{
        let result = await client.db("test123").collection("listOfStreaks").find({"name": value})
        console.log(`Query Executed`)
        return result
    },
    addition:  () =>{
        return new Promise((resolve, reject) => {
            // Where someAsyncFunction takes a callback, i.e. api call

                let result = client.db("test123").collection("listOfStreaks").find({field: value})
                console.log(`Query Executed`)
                return result            
        })
    },

}

//mainSetupDatabaseConnection()
