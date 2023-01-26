const { song } = require("../../BL/songLogic");
const playlistModel = require("../models/playlist");
const songModel = require("../models/song")


// create
async function addSongToDb(data) {
    let res = await songModel.create(data);
    return res

}


// addSongToDb({
//     channel: {name: 'gaza45454545', icon: 'https://yt3.ggpht.com/ytc/AMLnZu_n-bgcmG-iIP33NpoIEMQywbKWU-CVUjJPDSZB=s0-c-k-c0x00ffffff-no-rj', id: 'UCQcGGGjHb0pqo2ol9Ksmoyg'},
// description: null,
// duration: 164000,
// duration_formatted: "2:44",
// id: "gj0Rz-uP4Mk",
// live: false,
// private: false,
// ratings: {likes: 0, dislikes: 0},
// tags: {},
// thumbnail: {url: 'https://i.ytimg.com/vi/gj0Rz-uP4Mk/hqdefault.jpg?s…j0AgKJDeAE=&rs=AOn4CLAtZ0UB_fob0g7by3nxv9QFlG0Evg', height: 270, id: 'gj0Rz-uP4Mk', width: 480},
// title: "Elvis Presley - Jailhouse Rock (Music Video)",
// type: "video",
// uploadedAt: "14 years ago",
// url: "https://www.youtube.com/watch?v=gj0Rz-uP4Mk",
// views: 236228539
// })


async function read(data){
    let res = await songModel.findOne({"_id":data})
    return res; 
}




//read
async function readSong(filter) {
    
    let res = filter
        ? await songModel.findOne({ "url": filter })
        : false
    //if it dosent exist then it returns null
    return res
}

// readSong({url: "https://www.youtube.com/watch?v=GyfLrICkNFs",})

//readMany 
// async function showSongsFromPl(filter){
//     let res= filter
//     ?await songModel.find({songs: filter.songs})
//     :false
//     console.log(res);
//     return res
// }
// showSongsFromPl({
//     _id: ("62eb8da5d3930d18b4cc6778"),
//     name: 'cool songs',
//     songs: [
//       ("62eb777dbdeebc01238e7e4e"),
//       ("62d6b04d9230edc822c8b662")
//     ],
//     user: ("62eb85f98ba6035b92608046"),
//     __v: 0
//   })

// update--------- not relevant


// delete 
async function deleteSong(filter) {
    let res = filter
        ? await songModel.findByIdAndDelete(filter._id)
        : await songModel.findByIdAndDelete({})
    return res

}

module.exports = { addSongToDb, readSong,deleteSong,read }











