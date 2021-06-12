const collections = require('../config/mongoCollections');

const animals = collections.animals;
const {ObjectId}= require("mongodb");
module.exports = {
  
  async getId(id) {
    if (!id || id == "")
    throw "You must provide an id to search for";

    const animalCollections = await animals();
    const animalOne = await animalCollections.findOne({ _id: id });
    if (animalOne === null)
    throw "No animal with that id";

    return animalOne;
  },

  async getAll() {
    const animalCollections = await animals();

    const animalTwo = await animalCollections.find({}).toArray();

    return animalTwo;
  },

  async create(name, animalType) {
    if (!name || typeof name != 'string' || name == "")
    throw "You must provide a name ";

    if (!animalType || typeof animalType != 'string' || animalType == "")
    throw " animal type needed!";

    const animalCollections = await animals();

    let newAnimal = {
      name: name,
      animalType: animalType,
      "likes": [],
      "posts": []
    };

    const insertInfo = await animalCollections.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0)
    throw "Could not add animal";

    const newId = insertInfo.insertedId;

    const animalThree = await this.getId(newId);
    return animalThree;
  },

  async remove(id) {
    if (!id || id == "")
    throw "You must provide an id ";
 
    const animalCollections = await animals();
    const deletionInfo = await animalCollections.removeOne({ _id: id });
    console.log(deletionInfo);
    if (deletionInfo.deletedCount === 0) {
      throw "Could not delete animal with id of ${id}";
    }
    
  },

  async rename(id, newName) {
    if (!id || id == "")
    throw "You must provide an id to search for";

    if (!newName ||  typeof newName != 'string' || newName == "")
    throw "You must provide a name for your animal";

    const animalCollections = await animals();
    

    const updateInfo = await animalCollections.updateOne({ _id: id }, {$set: {name: newName}});
    if (updateInfo.modifiedCount === 0) {
      throw "could not update animal successfully";
    }

    return await this.getId(id);
  },

  async addPostToAnimal(posterId, newId, title) {
    let currentUser = await this.getId(posterId);
    console.log(currentUser);

    const animalCollections = await animals();
    const updateInfo = await animalCollections.updateOne(
      {_id: posterId},
      {$addToSet: {posts: {_id: newId, title: title}}}
    );

    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getId(posterId);
  }
};