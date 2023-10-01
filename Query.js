use('DataBaseName')
db.createCollection('NewCollection');//Create a NewCollection in DataBaseName  

use('DataBaseName')
//Inserts a single document into a collection.
db.NewCollection.insertOne({
    "Name":"Al Shahoriar",  
    "age":24,
    "Profession":"Student",
    "City":"Bogura",
})

use('DataBaseName')
// Delete/remove a single document from the collection.
db.NewCollection.deleteOne({
   "Name":"Al Shahoriar"
})

use('DataBaseName')
db.NewCollection.drop(); //Removes the collection from the DataBaseName in  database.