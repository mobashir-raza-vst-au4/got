const MongoClient = require('mongodb').MongoClient;
const csv = require('csvtojson');
const file = 'battles.csv';
const uri = "mongodb+srv://admin:admin1234@cluster0.8zads.mongodb.net/got?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

csv().fromFile(file).then(dataObj => {
    console.log("DATABSE is connected")
    client.connect(err => {
    const collection = client.db("got").collection("datas");
    // perform actions on the collection object
    collection.insertMany(dataObj, (error, res) => {
        if(error) {
            console.log(error);
        }
    })
 });

})

module.exports = client;


