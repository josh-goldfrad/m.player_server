const express= require("express");
const router=express.Router();

// const usersRouter= require('./userRoute')
const searchRouter= require("./searchRoute");
const playlistRouter= require("./playlistRoute")


router.use("/search",searchRouter);
router.use("/playlist",playlistRouter)


module.exports=router;