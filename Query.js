user('DataBaseName')
db.createCollection('NewCollection');//Create a NewCollection in DataBaseName  

user('DataBaseName')
//Inserts a single document into a collection.
db.NewCollection.insertOne({
    "Name":"Al Shahoriar",  
    "age":24,
    "Profession":"Student",
    "City":"Bogura",
})

user('DataBaseName')
// Delete/remove a single document from the collection.
db.NewCollection.deleteOne({
   "Name":"Al Shahoriar"
})

user('DataBaseName')
db.NewCollection.drop(); //Removes the collection from the DataBaseName in  database.