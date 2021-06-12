const people = require("./people");
const work = require("./work");
const weather = require("./weather");

async function main(){
    try{
        await people.getPersonById(43);// Brew Peat
       // await people.getPersonById(-1); //ID out of bounds
        await people.getPersonById(1000)//ID out of bounds
       // await people.getPersonById() // Throws Error
               
    }catch(e){
        console.log (e);
    }
    
try{
  await people.lexIndex(2) // Returns: "Dermot Abberley"
  await people.lexIndex(-1) // Throws Error
   //await people.lexIndex(1000) \\ Throws Error
 await people.lexIndex() // Throws Error
}catch(e){
    console.log(e);
}


await people.firstNameMetrics();


try{
    await weather.shouldTheyGoOutside("Scotty", "Barajaz") // Returns "Yes, Scotty should go outside."
    //await weather.shouldTheyGoOutside("Calli", "Ondrasek") // Returns "No, Calli should not go outside."
    //await weather.shouldTheyGoOutside() // Input not defined
    //await weather.shouldTheyGoOutside("Bob") // Input not present
    await weather.shouldTheyGoOutside("Bob", "Smith") // Person not found
}catch(e){
    console.log(e);
}

try{
    await work.whereDoTheyWork("Demetra", "Durrand") // Returns: "Demetra Durrand - Nuclear Power Engineer at Buzzshare. They will be fired."
    //await work.whereDoTheyWork() // Input not defined
    //await work.whereDoTheyWork("Bob") // Input not present
    await work.whereDoTheyWork("Bob", "Smith") // Person not found

}catch(e){
    console.log(e);
}


try{
    await work.findTheHacker("79.222.167.180") // Returns: "Robert Herley is the hacker!"
    await work.findTheHacker("foobar") // Input Not Found
//    await work.findTheHacker() //  Input argument undefined

}catch(e){
    console.log(e);
}

}

//call main
main()
