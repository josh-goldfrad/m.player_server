const express = require("express");
const router = express.Router();

const songLogic = require('../BL/songLogic')


router.post("/", async (req, res) => {
      try {
        const result = await songLogic.addSong(req.body);
        // console.log(result, "added to DB");
        res.status(200).send(result)
    } catch (error) {
        console.log("error", error);
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("error in catch in song route")
        }
    }
});

// router.post("/addSong", async (req, res) => {
//     try {
//       const result = await songLogic.song(req.body);
//       res.status(200).send(result)
//   } catch (error) {
//       console.log("error", error);
//       if (error.code && error.code < 1000) {
//           res.status(error.code).send(error.message)
//       }
//       else {
//           res.send("error in catch in song route")
//       }
//   }
// });





module.exports = router;