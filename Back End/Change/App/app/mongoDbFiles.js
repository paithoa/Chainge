// Model or Scheme Connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
// //Twilio Configuration
// const accountSid = 'AC94a67a604d30fa64da5f7094a9e55889';
// const authToken = 'e6e210fda12b972c76c7421dc6d653b3';
// const client = require('twilio')(accountSid, authToken);
//MongoDB Methods


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}
async function createListing(client, newListing){
    const result = await client.db("test123").collection("devices123").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}
async function findOneListingByName(client, nameOfListing) {
    result = await client.db("test123").collection("devices123").findOne({ name: nameOfListing }
);
 
    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

//main function for calling the mongodb
async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://handy-project:Paithoa301197@cluster0-inunu.gcp.mongodb.net/test";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        let newListing = {
            name: "Shitty Hotel",
            summary: "well its shit",
            bedrooms: 2,
            bathrooms: 3
        }; 
        // Make the appropriate DB calls
        await  listDatabases(client);
        //await  createListing(client,newListing)
        var nameOfHotel = await findOneListingByName(client, "Shitty Hotel");

 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

const mongoDbFiles = main().catch(console.error);
module.exports = mongoDbFiles;