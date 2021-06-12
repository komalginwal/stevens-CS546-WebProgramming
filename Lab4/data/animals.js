const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals;
const objectId = require('mongodb').ObjectID;

module.exports = {
  
async create(name, animalType){

try{if (!name || !animalType) throw "You must provide both  name and type of animal";}catch(err){ console.log(err);}

try{if(typeof name ==="string" && typeof animalType === "string"){
  
  const animalCollection = await animals();
  let newAnimal = {
    name: name,
    animalType: animalType};

  const Info = await animalCollection.insertOne(newAnimal);
  if (Info.insertedCount === 0) throw "Could not add animal";
  return newAnimal;
} else {
  const a = "Provide a valid string input";
  return a;}
} catch(err){ console.log(err);}
  
return '';
},

async get(id) {
  try{if (!id) throw "You must provide a id ";}catch(err){ console.log(err);}

  if(typeof (id) ==="string"){
  const animalCollection = await animals();
  const found = await animalCollection.findOne({_id : objectId(id) });
 
  try{ if (found === null) throw "No animal with that id";}catch(err){ console.log(err);}
  return found;
}
const hello = "Provide a valid string as id";
return hello;
},

async getAll(){

  const animalCollection = await animals();
  const allAnimals= animalCollection.find({}).toArray();
  return allAnimals; 
},

async remove(id) {
  
  try{if (!id) throw "Empty ";}catch(err){ console.log(err);}
  
  try{ if(typeof id ==="string"){
  const animalCollection = await animals();
  const Info = await animalCollection.removeOne({ _id: objectId(id) });
  
  if (Info.deletedCount === 0) {
     throw `Could not delete dog with id of ${id}`;
     }else { const a = `Removed ${id}`;
     return a;}}
  else {const a = "Provide a valid string id";
  return a;}}
  catch(err){console.log(err);}
return '';
} 



,

async rename(id, newName) { 
  try{if (!id || !newName) throw "Empty: Provide both Id and Name";}catch(err){ console.log(err);}
  
try{if(typeof id === "string"){
  const animalCollection = await animals();
  const updatedName = { $set : {name: newName} };
  const updateInfo = await animalCollection.updateOne({ _id:objectId(id) }, updatedName);
  if (updateInfo.modifiedCount === 0) {
    throw "could not update animal successfully";}

  return await this.get(id);
}
else{
  const hello = "Provide a valid string id";
  return hello;
}}catch(err){ console.log(err);}
return '';
}

}

