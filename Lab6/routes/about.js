const express = require('express');
const router = express.Router();

const aboutMe =
 
  {"name" : "Komal  Ginwal",
    "cwid": "10449969",
    "biography": "Actions speak louder than words, right? When Barney burned the playbook in front of Robin, he wordlessly promised to leave behind his manipulative and promiscuous ways, which meant that he was ready for a life of commitment and honesty. \nDespit the fact that he got Robin there with the most manipulative play marred the whole thing, it was undoubtedly a huge gesture for Barney.was significant, heralding the end of an era.Yet, the playbook appears again in How I Met Your Mother, only to be destroyed by Ted’s last girlfriend before Tracy, Jeanette -- crazy, scary Jeanette. ",
    "favoriteShows": ["How I Met Your Mother", "Friends", "The Office", "Suits", "Modern Family"],
    "hobbies": ["Dancing", "Watching Tv Series", "Yoga"]
  };

  router.get("/",(req, res) => {
      res.json(aboutMe);
  });

  module.exports = router;