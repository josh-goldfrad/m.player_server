const mongoose = require("mongoose");


const songSchema = new mongoose.Schema([{
    uploadedAt: {
        type: String,
        required: true
    },
    thumbnail: {
        url: {
            type: String,
            required: true
        },
        height: { type: Number },
        id: { type: String },
        width: { type: Number }
    },views:{
        type:Number
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    duration_formatted: {
        type: String,
        required: true
    },
    channel: {
        name: {
            type: String,
            required: true
        }, icon: {
            type: String,
        }, id: {
            type: String,
        }
    }

}])

const songModel =mongoose.model('song',songSchema)

module.exports=songModel;

console.log("song.js");
// uploadedAt,url,views, channel.name,duration_formatted,title,thumbnail.url