const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const objectId = require('mongodb').ObjectID;

module.exports = {
  
async createTask(title, description){

  if (typeof title === "undefined") throw "You must provide a title ";
  if(typeof description === "undefined") throw "Enter a valid description";
  
  const itemsCollection = await todoItems();
  let newItem = {
    title: title,
    description: description,
    completed: false,
    completedAt: null};

  const Info = await itemsCollection.insertOne(newItem);
  if (Info.insertedCount === 0) throw "Could not add item";
  return newItem;
},

async getAllTasks(){

    const itemCollection = await todoItems();
    const allItems= itemCollection.find({}).toArray();
    return allItems; 
  },
  async getTask(id) {
    if (!id) throw "You must provide an id to search for";
    const itemCollection = await todoItems();
    const found = await itemCollection.findOne({_id : objectId(id) });
   
    if (found === null) throw "No item with that id";
    return found;
  },
  

  async removeTask(id) {
    if (!id) throw "You must provide an id to search for";
  
    const itemCollection = await todoItems();
    const Info = await itemCollection.removeOne({ _id: objectId(id) });
   
    if (Info.deletedCount === 0) {
      throw `Could not delete item with id of ${id}`;
    }
    return '';
  } ,

  async completeTask(id) {
    if (!id) throw "You must provide an id to search for";
    
   
  
    const itemCollection = await todoItems();
    const updatedTask = { $set : {completed: true,
                                   completedAt : new Date()} };
    const updateInfo = await itemCollection.updateOne({ _id: id }, updatedTask);
    if (updateInfo.insertedCount === 0) {
      throw "could not update  successfully";}
  
    return await this.getTask(id);
  }

}