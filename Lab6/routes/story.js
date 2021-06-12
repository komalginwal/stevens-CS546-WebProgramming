const express = require('express');
const router = express.Router();

const story = {
    
        "storyTitle": "How I Met Your Mother: Five Things That Make No Sense About Barney",
        "story": "BARNEY MARRYING ROBIN IN THE FIRST PLACE  : Marriage just isn’t for some people, and that’s okay.Not everybody is meant to get married. Robin and Barney getting together and committing to one another made some sense, despite how messy it was. After all, Cobie Smulders and Neil Patrick Harrisshare some incredible chemistry, so the writers were smart to take advantage of it.\nTHE INCONSISTENCY OF THE SLAPS : The eight slaps is another bit of HIMYM comedy that could only be entertaining to long-time fans of the sitcom. It’s the kind of dumb but funny thing that friends \ndo, and it encapsulates both HIMYM’s warmth and good humour.."
      
}

router.get("/",(req, res) => {
    res.json(story);
});

module.exports = router;