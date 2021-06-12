const express = require("express");
const router = express.Router();
const animalsData = require("../data/animals");

router.get("/", async (req, res) => {
  
    const animal = await animalsData.getAll();
    res.json(animal);   
  
  }  );

router.post("/", async (req, res) => {
  const animal = req.body;
  if(!animal)
  {res.status(400).json({ error: 'You must provide animal' });
  return;
}

if (!animal.name) {
    res.status(400).json({ error: 'You must provide a animal name' });
    return;
}

if (!animal.animalType) {
    res.status(400).json({ error: 'You must provide a animal type' });
    return;
}
try {
    const newAnimal = await animalsData.create(animal.name, animal.animalType);
    res.json(newAnimal);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/:id", async(req,res) =>{
    try{
        const animal = await animalsData.getId(req.params.id);
        res.status(200).json(animal)
    }catch(e){
        if(e=='0'){
          res.status(404).json({error:'No Animal with this id'});
        }
        else{
          res.status(404).json({error:e})
        }
    }
});

router.put("/:id",async(req,res) =>{
    try{
       const animalData = req.body;
       const {newName,newType}  = animalData
       if(!animalData) throw "Body is missing"
       if(!req.params.id) throw "Params Id is missing"
       const animal = await animalsData.rename(req.params.id,newName,newType)
       //sending that response
       res.json(animal)
    }catch(e){
        if(e=='0') res.status(404).json({error:"No Animal found with that id"})
        else res.status(400).json({error:e});
    }
})
router.delete("/:id",async(req,res)=>{
  try{
    let animalToBeDeleted = await animalsData.remove(req.params.id)
    res.json(animalToBeDeleted)
  }catch(e){
    if(e=='0') res.status(404).json({error:"No Item with that ID"})
    else res.status(404).json({error:e});
  }
})



module.exports = router;