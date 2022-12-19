const express= require("express");
const router=express.Router();

const searchRouter= require("./searchRoute");
const songRouter= require("./songRoute");
const playlistRouter= require("./playlistRoute");
const userRouter= require("./userRoute");




router.use("/search",searchRouter);
router.use("/song",songRouter);
router.use("/playlist",playlistRouter);
router.use("/user",userRouter);




module.exports=router;