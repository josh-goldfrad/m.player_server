const express= require("express");
const router=express.Router();

// const usersRouter= require('./userRoute')
const searchRouter= require("./searchRoute");
const songRouter= require("./songRoute")


router.use("/search",searchRouter);
router.use("/song",songRouter)


module.exports=router;