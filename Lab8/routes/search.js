const express = require("express")
const router  = express.Router()
const axios   = require("axios")

router.post("/search", async (req,res)=>{
let personName = req.body["personName"];
if(personName){
 console.log("PersonName ",typeof(personName))
 let peopleJson = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json");
 let people = new Array();
 let title = "People Found"
 if(peopleJson.status === 200){
     let data = peopleJson.data;
     let count = 0;
   for(let i in data){
    if((data[i].firstName.toLowerCase()).indexOf(personName.toLowerCase())!==-1||(data[i].lastName.toLowerCase()).indexOf(personName.toLowerCase()) !== -1)
    {   count++;
        people.push(data[i]);
        if(count >= 20){
                    break;}
}
}
res.render("details/search", {people: people,title:title,personName:personName});
}
}else{
res.status(400).render("details/error",{error:{status:400,message:"Error Message"}})
}
})

module.exports = router