const express = require("express");
const router = express.Router();

const playlistLogic = require('../BL/playlistLogic')


router.post("/", async (req, res) => {
    try {
        const result = await playlistLogic.playlist(req.body);
    console.log("playlist req params", req.body)
    // console.log(result.data);
    res.status(200).send(result)
    
       
    } catch (error) {
        console.log("error", error);
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("error in catch in playlist route")
        }
    }
});

module.exports = router;