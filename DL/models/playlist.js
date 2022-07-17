const mongoose = require("mongoose")
require("./song")
const playlistSchema= new mongoose.Schema({
    name:{
        type:String
    },
    songs:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:"song"
        },
    ],
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref :"user"
    }
})

const playlistModel=mongoose.model("playlist",playlistSchema)

module.exports= playlistModel