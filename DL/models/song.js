const mongoose = require("mongoose");


const songSchema = new mongoose.Schema([{
    uploadedAt: {
        type: string,
        required: true
    },
    thumbnail: {
        url: {
            type: string,
            required: true
        },
        height: { type: Number },
        id: { type: string },
        width: { type: nunmber }
    },views:{
        type:Number
    },
    title: {
        type: string,
        required: true
    },
    url: {
        type: string,
        required: true
    },
    duration_formatted: {
        type: string,
        required: true
    },
    channel: {
        name: {
            type: string,
            required: true
        }, icon: {
            type: string,
        }, id: {
            type: string,
        }
    }

}])

const songModel =mongoose.model('song',songSchema)

module.exports=songModel;

// uploadedAt,url,views, channel.name,duration_formatted,title,thumbnail.url