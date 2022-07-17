const express = require("express");
const router = express.Router();

const searchLogic = require('../BL/searchLogic')


router.get("/:query", async (req, res) => {
    try {
        const result = await searchLogic.search(req.params.query);
    console.log("search req params", req.params)
    // console.log(result.result.data);
    res.status(200).send(result.result.data)
    
        // res.status(200).send({ msg: " /search --search successfull" ,banana:result.result.data})
    } catch (error) {
        console.log("error", error);
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("")
        }
    }
})

module.exports = router;