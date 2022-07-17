const songModel = require("../models/song")

async function addToPlaylist(data) {
    console.log(data);
    let res = await songModel.create(data);
    console.log(res);

}

// let song = {
//     "uploadedAt": "12 years ago",
//     "thumbnail": { "url": "https://i.ytimg.com/vi/tAGnKpE4NCI/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAgGhgw7K3YnD2IUj7yyP4jMt7X5w", "height": 270, "id": "tAGnKpE4NCI", "width": 480 },
//     "views": 1142132922, 
//     "title": "Metallica: Nothing Else Matters (Official Music Video)",
//     "url": "https://www.youtube.com/watch?v=tAGnKpE4NCI",
//     "duration_formatted": "6:26",
//     "channel": { "name": "Metallica", "icon": "https://yt3.ggpht.com/ZjcQii3sVKaPcGK3rIm8vot-qwdmm7KAHsWCjlQLsDLa_tm2kykM-Lgmty1IwQWehj7nEzXPUA=s0-c-k-c0x00ffffff-no-rj", "id": "UCbulh9WdLtEXiooRcYK7SWw" }
// }

// addToPlaylist(song)


module.exports = { addToPlaylist }