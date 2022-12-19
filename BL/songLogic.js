const axios = require("axios");
require("dotenv").config()
songController = require("../DL/controllers/songController")

async function addSong(data) {
    console.log(data);
    const { uploadedAt, thumbnail, title, url, duration_formatted, channel } = data
    try {

        if (!uploadedAt || !thumbnail || !title || !url || !duration_formatted || !channel) throw { "songLogic": "songLogic", code: 400, message: "error with input from front " }
        const checkSong = await songController.readSong(url)
        if (checkSong) {
            console.log("checksong",checkSong?._id);
            return checkSong?._id;
        } else {
            const newSong = await songController.addSongToDb(data)
            console.log("newsong",newSong?._id);

            return newSong?._id
        }
    }
    catch (error) {
        console.log(error)
        // const existingUser = await userController.readOne({ email: email })
        // if (existingUser) throw { code: 400, message: "email already used " }

        // const user = await userController.create(data)
    }
}

async function readSongFromPL(data) {
    // console.log(data.songs[1], "songs");
    let songList = [];
    for (i of data.songs) {
        let res = await songController.read(i)
        songList.push(res);
    }
    // console.log("songlist---------------",songList);
    return songList;
}


// readSongFromPL({
//     _id: {
//         _id: "62f24ea30c7e00fe23889250"
//     },
//     name: "cmon  ccccmooooo mannn 2",
//     songs: [
//         "62eb777dbdeebc01238e7e4e" ,
//         "62d6b04d9230edc822c8b662"
//     ],
//     user: {
//         _id: "62eb85f98ba6035b92608046"
//     },
//     __v: 0
//     , newName: "cmon  ccccmooooo mannn 3"
// })


// song({
//     uploadedAt: "1 years ago",
//     thumbnail: { url: "קשגדכעיחליצעכ", height: "270", id: "tAGnKpE4NCI", width: "480" },
//     views: "1142132922",
//     title: "hולע אבא בדרךךךךךךךךך",
//     url: "https://www.youtube.com/watch?v=tAGnKpE4NCI",
//     duration_formatted: "6:26",
//     channel: { name: "Metallica", icon: "https://yt3.ggpht.com/ZjcQii3sVKaPcGK3rIm8vot-qwdmm7KAHsWCjlQLsDLa_tm2kykM-Lgmty1IwQWehj7nEzXPUA=s0-c-k-c0x00ffffff-no-rj", id: "UCbulh9WdLtEXiooRcYK7SWw" }
// }
// )

module.exports = { addSong, readSongFromPL }