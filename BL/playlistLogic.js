const axios = require("axios");
require("dotenv").config()

async function playlist(data) {
    const { uploadedAt, thumbnail, title, url, duration_formatted,channel} = data
    if (!uploadedAt || !thumbnail || !title || !url||!duration_formatted||!channel) throw { "playlistlogic": "playlistlogic", code: 400, message: "error with input from front " }

    // const existingUser = await userController.readOne({ email: email })
    // if (existingUser) throw { code: 400, message: "email already used " }

    // const user = await userController.create(data)

    return true
}

module.exports={playlist}