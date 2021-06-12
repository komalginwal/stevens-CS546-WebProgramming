const dictionary = require("./dictionary");

console.log("Use of lookupDefinition function");
try {
    console.log("The definition of Programming is : " + dictionary.lookupDefinition("programming"))
}catch (error){
    console.log(error)
}

try {
    console.log("The definition of Foray is : " + dictionary.lookupDefinition("foray"))
}catch (error){
    console.log(error)
}
console.log("Use Of getWord Function")
try{
    console.log("To act as a detective : search for information is defined by word : " + dictionary.getWord("To act as a detective : search for information"))
}catch (error){
    console.log(error)
}
try{
    console.log("A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader) is defined by word : " + dictionary.getWord("A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)"))
}catch (error){
    console.log(error)
}


/*OUTPUT*/

/*PS C:\Users\Komal\CS 546\Exercise> node app.js
Use of lookupDefinition function
The definition of Programming is : The action or process of writing computer programs.
The definition of Foray is : A sudden or irregular invasion or attack for war or spoils : raid
Use Of getWord Function
To act as a detective : search for information is defined by word : sleuth
A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader) is defined by word : charisma
PS C:\Users\Komal\CS 546\Exercise>

*/
