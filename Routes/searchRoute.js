const express = require("express");
const router = express.Router();
const { authJWT } = require("../auth/auth")
const searchLogic = require('../BL/searchLogic')


router.get("/:query", async (req, res) => {
    try {
        const result = await searchLogic.search(req.params.query);
        res.status(200).send(result?.result?.data)

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