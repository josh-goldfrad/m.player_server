const axios = require("axios");
const { createJToken } = require("../auth/jwt");
userController = require("../DL/controllers/userController");
playlistController = require("../DL/controllers/playlistController");

async function createUser(data) {
    const { name, password, playlists } = data
    if (!name || !password) throw { "userlogic": "userLogic", code: 400, message: "error with input" }
    let newUser = await userController.addNewUser(data)
    return newUser
}

async function checkExist(data) {
    const { name, password, playlists } = data
    if (!name || !password) throw { "userlogic": "userLogic", code: 400, message: "error with input" }
}

async function login(data) {
    const { username, password } = data
    try {
        if (!username || !password) throw { "userlogic": "userLogic", code: 400, message: "error with input" }
        const user = await userController.readUser({ name: username, password: password })
        const playlists = await playlistController.readMany(user._id)
        if (user.length === 0) throw { code: 406, message: "user or password incorrect" }
        if (password !== user.password) throw { code: 406, message: "user or password incorrect" }
        const loggedIn = await userController.login(data)
        let token = await createJToken(user?._id)
        info = { playlists: playlists, user: loggedIn
            , token
         }
        return info
    } catch (error) {
        console.log("password or username are incorrect")
        return false
    }
}

module.exports = { createUser, login, checkExist }