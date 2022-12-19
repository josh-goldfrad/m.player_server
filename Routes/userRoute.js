const express = require("express");
const router = express.Router();

const userLogic = require('../BL/userLogic')


router.post("/register", async (req ,res) => {
    try {
        const checkExist= await userLogic.checkExist(req.body);
        // now if checkExist is good then do next line
        const result = await userLogic.createUser(req.body);
        console.log("user req", req.body);
        res.status(200).send(result)
    } catch (error) {
        console.log("error", error);
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
        res.send(error||"error in catch in user route")
        }

    }
})


router.post("/login", async (req ,res) => {
    // console.log(req);
    try {
        const result = await userLogic.login(req.body);
        console.log("user req login", req.body);
        res.status(200).send(result)  
    } catch (error) {
        console.log("error", error);
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
        res.send("error in catch in user route")
        }
    }
})

module.exports = router