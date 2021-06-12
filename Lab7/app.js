const express = require("express")
const app = express()
const configRoutes = require("./routes")
const static = express.static(__dirname + "/public");
app.use("/public", static);
configRoutes(app)
app.listen(3000, ()=>{
console.log("We have our  server running")
console.log("Your routes are running at 3000")
})