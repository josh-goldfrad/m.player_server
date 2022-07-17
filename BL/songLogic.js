const axios = require("axios");
require("dotenv").config()
songController = require("../DL/contollers/songController")

async function song(data) {
    const { uploadedAt, thumbnail, title, url, duration_formatted,channel} = data
    if (!uploadedAt || !thumbnail || !title || !url||!duration_formatted||!channel) throw { "songLogic": "songLogic", code: 400, message: "error with input from front " }

    const newSong= await songController.addToPlaylist(data)
    // const existingUser = await userController.readOne({ email: email })
    // if (existingUser) throw { code: 400, message: "email already used " }

    // const user = await userController.create(data)

    return true
}

module.exports={song}