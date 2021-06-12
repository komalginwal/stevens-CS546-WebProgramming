const express = require('express');
const router = express.Router();

const education = 
    [
        {
          "schoolName": "Stevens Institute of Technology",
          "degree": "Masters Degree",
          "favoriteClass": "Web Programming",
          "favoriteMemory": "Naina Talwar (Deepika Padukone) is a shy and nerdy medical student. She studies constantly and always tops her classes, but she feels like an outcast due to her introverted nature. \nAn encounter with an old classmate, Aditi Mehra (Kalki Koechlin), makes her realize that she wants more from life than high marks. Thus, she makes an impulsive decision to follow Aditi on a hiking trip into the Himalayas, up to Manali without informing her overbearing parents. \nDuring the hike, she renews her friendship with other former classmates, Kabir Bunny Thapar (Ranbir Kapoor) and Avinash Avi Arora (Aditya Roy Kapur)."},
        {
           "schoolName": "Ramrao Adik Institute of Technology",
            "degree": "Bachelor Degree",
            "favoriteClass": "Data Mining",
            "favoriteMemory": "Bunny is a handsome charmer whose dream is to wander and discover the world. He does not plan to marry or settle down.\n He lives with his supportive father (Farooq Sheikh) who he loves very much, and his step-mother. During their trip, seeing Aditi's silent reactions to Avi's constant flirting with other girls, Bunny and Naina realize that she is secretly in love with Avi, but does not bring the matter to surface.\n In the course of the mountain trek, Bunny and Naina become close. Bunny teaches Naina to laugh, to play, and more importantly, to love. At the end of the trip, she is close to telling him that she is in love with him, but is interrupted by Avi who has accidentally found a letter accepting Bunny into a graduate school in journalism, at Northwestern University in Chicago."
          },
          {
            "schoolName": "D.A.V Public School",
            "degree": "High School Diploma ",
            "favoriteClass": "Mathematics",
            "favoriteMemory": "Bunny explains that the trip is his last hometown adventure before he leaves. He is sad to leave his friends but excited to start a career that will lead to travelling, which he dreams of, and which is why he wanted to bring his two best friends along to Manali to give them a surprise. \nNaina realises that love and marriage have no part in Bunny's plans and remains silent about her feelings but is happy for him as he is following his passion."
          }
    ]

    router.get("/",(req, res) => {
        res.json(education);
    });
  
    module.exports = router;