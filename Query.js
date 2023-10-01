let http = require('http');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/CraftShop";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let query = { City: "Sylhet" };
    db.collection("employees").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
