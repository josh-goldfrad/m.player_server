const playlistModel= require("../models/playlist")

//create
async function createNewPlaylist(data){
  let res= await playlistModel.create(data)
  return res
}


//read
async function read (filter){
    let res =filter
    ?await playlistModel.findOne({"_id":filter})
    :false;
    return res
}

// read({playlist:{_id:"62eb8da5d3930d18b4cc6778"}})
// read({_id:"630b65e74e510317b8d177bd"})


// readmany
async function readMany(filter){
    let res =filter
    ?await playlistModel.find({user:filter})
    :false;
// console.log("res in read many PLAYLISTCONTROLLER",res);
    return res
}

// readMany("630b65e74e510317b8d177bd")


//update
async function updatePlaylist(filter,data){
    let res= await playlistModel.findOneAndUpdate(filter,data)
    return res
}
//need to do a read request and give it songs for the update to work 

// updatePlaylist({_id:"62d47492753ecd06b50b9de8"},{
//     name: 'metal playlist',
//     songs: [...songs,..."62d971c276de840d94794605"],
//     user: ("62eb85f98ba6035b92608046"),
//     __v: 0
// })

// updatePlaylist({_id:"62eb8da5d3930d18b4cc6778",song:{
 // uploadedAt: "1 years ago",
//     thumbnail: { url: "קשגדכעיחליצעכ", height: "270", id: "tAGnKpE4NCI", width: "480" },
//     views: "1142132922", 
//     title: "cmon mannnnnnnnnnnnnnnnn",
//     url: "https://www.youtube.com/watch?v=tAGnKpE4NCI",
// duration_formatted: "6:26",
//     channel: { name: "Metallica", icon: "https://yt3.ggpht.com/ZjcQii3sVKaPcGK3rIm8vot-qwdmm7KAHsWCjlQLsDLa_tm2kykM-Lgmty1IwQWehj7nEzXPUA=s0-c-k-c0x00ffffff-no-rj", id: "UCbulh9WdLtEXiooRcYK7SWw" }
// }
// }
// )


//delete
async function deleteIt(filter){
    let res=await playlistModel.findByIdAndDelete(filter)
    return res
}

// deleteIt({
//     "_id": {
//       "_id": "62f35e6a5bc0e75cd4760b15"
//     },
//     "name": "ho ho ho",
//     "songs": [
//       {
//         "_id": "62eb777dbdeebc01238e7e4e"
//       },
//       {
//         "_id": "62d6b04d9230edc822c8b662"
//       }
//     ],
//     "user": {
//       "_id": "62f0bb1fa9356405bf5d881f"
//     },
//     "__v": 0
//   })



module.exports={deleteIt,updatePlaylist,read,createNewPlaylist,readMany}

