const express = require("express")
const router  = express.Router()

router.get("/", async (req,res)=>{
try{res.render("details/home")
}catch(e){
res.send(404).json({error:e})
}
})

router.post("/search", async (req,res)=>{
    
try{console.log("HI ", req.body)
res.render("details/home")
}catch(e){
res.send(404).json({error:e})
}
})

module.exports = router