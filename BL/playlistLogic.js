const axios = require("axios");
playlistController = require("../DL/controllers/playlistController")
songController = require("../DL/controllers/songController")
const songLogic = require("./songLogic")


async function addToPlaylist(data) {

    const theSongId = await songLogic.addSong(data.song)
    console.log("data.playlist", data.playlist);
    const readPl = await playlistController.read(data.playlist)
    console.log("readPl", readPl);
    //  check if it includes this song already but it dosent return whole pl
    let checkForDuplicate = readPl?.songs?.find((v) => (String(v) == String(theSongId)))
    if (checkForDuplicate) {
        console.log("exists");
        return false
    } else {
        console.log("not in pl");

        console.log("is array", Array.isArray(readPl.songs));
        return await playlistController.updatePlaylist({ _id: data.playlist._id }, { songs: [...readPl.songs, theSongId] })

    }
    // const updatedPl = await playlistController.read({ _id: readPl._id })
    //     }

    //     return true 
}

// addToPlaylist({
//     song: {
//         thumbnail: {
//             url: "https://i.ytimg.com/vi/xzOuDllFhwg/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBPFD6_vlBkPgYQtj8AITJ9aQZysA",
//             height: 270,
//             id: "xzOuDllFhwg",
//             width: 480
//         },
//         channel: {
//             name: "Israeli Classics קלאסיקה ישראלית",
//             icon: "https://yt3.ggpht.com/ytc/AMLnZu9eEz3A_x-vkNjyT1DFXgsO7fdowx4in68jXbIzZw=s0-c-k-c0x00ffffff-no-rj",
//             id: "'UCD1FZBhJFeEVt2G8f7dPEKg'"
//         },
//         uploadedAt: "10 years ago",
//         views: 6717,
//         title: "testing this shiiit",
//         url: "https://www.youtube.testing hommmmmeebooooiii/watch?v=XnCry-YVDiw",
//         duration_formatted: "2:53",
//         __v: 0
//     }, playlist: { _id: "62e78850971b9d7772b704c1" }
// })

async function delSongFromPl(data) {
    let updatedPlPostDeletion = data?.songs?.filter(elem => elem?._id !== data?.songToDel?._id)
    //add a delete song funciton- done 19/12
    await playlistController.updatePlaylist({ _id: data?._id }, { songs: [...updatedPlPostDeletion] })
    const superUpdatedPl = await playlistController.read(data._id)
    const newPl = await songLogic.readSongFromPL(superUpdatedPl);
    return newPl
}
// delSongFromPl({
//     _id: {
//         _id: "62f24ea30c7e00fe23889250"
//     },
//     name: "postman no2",
//     songs: [
//         "62eb777dbdeebc01238e7e4e" ,
//         "62d6b04d9230edc822c8b662",
//         "62d44b6ac1b21e54d7568a7f",
//         "62d6b05c9230edc822c8b665"
//     ],
//     user: {
//         _id: "62eb85f98ba6035b92608046"
//     },
//     __v: 0
// ,songToDel: "62d6b05c9230edc822c8b665"})

async function renamePlaylist(data) {
    try {
        await playlistController.updatePlaylist({ _id: data?._id }, { name: data?.newName })
        const newName1 = await playlistController.read({ _id: data._id })
        return newName1
    } catch (error) {
        console.log(error || "error");
    }

}


// renamePlaylist({
//     _id: {
//         _id: "62f24ea30c7e00fe23889250"
//     },
//     name: "cmon  ccccmooooo mannn 2",
//     songs: [
//         {
//             _id: "62eb777dbdeebc01238e7e4e"
//         },
//         {
//             _id: 
//         }
//     ],
//     user: {
//         _id: "62eb85f98ba6035b92608046"
//     },
//     __v: 0
//     , newName: "cmon  ccccmooooo mannn 3"
// })

async function read(MongoId1) {
    try {
        const readPlaylist = await playlistController.read(MongoId1)
        return readPlaylist
    } catch (error) {
        console.log(error || "error");
    }
}

async function showUsersPlaylists(userId) {
    try {
        const showThePl = await playlistController.readMany(userId)
        return showThePl
    } catch (error) {
        console.log(error || "error");
    }
}

async function PlreadSongsFromPl(data) {
    try {
        const songArr = await songLogic.readSongFromPL(data)
        console.log(songArr);
        return songArr
    } catch (error) {
        console.log(error || "error");

    }
}

// PlreadSongsFromPl({
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

async function createNewPlaylist(data) {
    try {
        const create = await playlistController.createNewPlaylist(data)
        return create
    } catch (error) {
        console.log(error || "error");

    }
}

// createNewPlaylist({name:"testing schema",songs:{
//     _id:"63072f5e92463fbefb285cb9"
// },user:"630b65e74e510317b8d177bd"})

async function deletePlaylist(data) {
    console.log("papaya");
    try {
        const del = await playlistController.deleteIt(data._id)
        return del
    } catch (error) {
        console.log(error || "error");

    }
}

// deletePlaylist({
//     "_id": {
//       "_id": "62f24684bc42f5ba154cd5bc"
//     },
//     "name": "comon man",
//     "songs": [
//       {
//         "_id": "62eb777dbdeebc01238e7e4e"
//       },
//       {
//         "_id": "62d6b04d9230edc822c8b662"
//       }
//     ],
//     "user": {
//       "_id": "62eb85f98ba6035b92608046"
//     },
//     "__v": 0
//   })




module.exports = { addToPlaylist, read, createNewPlaylist, deletePlaylist, renamePlaylist, PlreadSongsFromPl, delSongFromPl, showUsersPlaylists }