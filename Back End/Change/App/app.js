// var client;
const express = require('express')
const app = express()
const port = 8000
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
const mongo = require('./mongoDBMethods');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://handy-project:Paithoa301197@cluster0-inunu.gcp.mongodb.net/test";
const client = new MongoClient(uri);
app.use(cors())


// Create Date

// function to create images based on the description
function createDate(){
    //return Date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return today
}

function highestStreakDay(date_since_start,todayDate){
    // return highest streak
    let today = new Date(todayDate);
    let arrayDate = date_since_start.split("/");
    let combinedDate = arrayDate[2] + "-" + arrayDate[1] + "-" + arrayDate[0]
    let myDate = new Date(combinedDate);
    highestStreak = today.getDate() - myDate.getDate();

    return highestStreak
}


async function mainFlow(){
    try {
        // Connect to the MongoDB cluster
        
        await client.connect();
        let date_start_cursor = await mongo.queryActivity(client,"No Poker")
        date_start_array = date_start_cursor.toArray();
        date_start_array.then(function(value) {
            var query = value
            let todayDate = createDate()
            //console.log(query)
            //highestStreakDay(query[0].date_since_start,todayDate)
            // expected output: "Success!"
          })
    } 
    catch (e) {
        console.error(e);
    }
    //let date_start = await mongo.queryActivity("name","No Poker")
    //console.log(date_start)
}

mainFlow();
app.get('/', (req,res) => {
    let allCollection = client.db("test123").collection("listOfStreaks").find().toArray()
    console.log('get called');
    allCollection.then((value => res.send(value)));
    })
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
