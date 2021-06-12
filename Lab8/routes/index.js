const search = require("./search")
const home = require("./home")
const details = require("./details")
const axios = require("axios");

const constructorMethod = app => {
app.get("/",(req,res)=>{
    let title = "People Finder"
    res.render("details/home", {title})
    })
    app.post("/search",search)
    app.use("/details",details)

    app.use("*",(req,res)=>{
    res.status(404).render("details/error",{error:{status:404,message:"Not found"}});
    })
}

module.exports = constructorMethod;