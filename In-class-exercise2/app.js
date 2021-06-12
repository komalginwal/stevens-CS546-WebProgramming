const todoItems = require("./todo");


async function main() {

   // const createdTask = await todoItems.createTask("My First Task", "This is the first thing I need to do today");
   // console.log(createdTask);

   //const createdTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
   //console.log(createdTask);

  //  const createdTask = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
// console.log(createdTask);

//const getTasks = await todoItems.getAllTasks();
//console.log(getTasks);

//const removeTask = await todoItems.removeTask("5d9691eb6fef5f34541f3960");
//console.log("REMOVED")
//console.log(removeTask);

const getTasks = await todoItems.getAllTasks();
console.log(getTasks);

//const task = await todoItems.getTask("5d9692d449cab83d402eec5c");    
//const finishedTask = await todoItems.completeTask(task._id); 
//    console.log(finishedTask);
}
main();