const mongoose = require("mongoose")
// require("./song")
require("./playlist")
const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    password: {
        type: String, required: true, 
        select: false
    }
   
})


const userModel = mongoose.model("user", userSchema)

module.exports = userModel