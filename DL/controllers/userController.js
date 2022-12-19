const userModel = require("../models/user")


async  function addNewUser(data){
    let res= await userModel.create(data)
    return res
}

// addNewUser({name:"curios george",password:"028374347vhseff"})

async function login(data){
    let res= await userModel.findOne(data)
    console.log(res,"login function");
    return res
}

// login({name:"josh",password:"12345"})

async function readUser (filter){
    let res= filter 
    ?await userModel.findOne(filter).select("+password")
    :  false;
// console.log(res);
    return res
}
// readUser({name:"shachar",password:"012012"})

async function addPlaylist(filter,data){
    let res =await userModel.findByIdAndUpdate(filter,data)

    return res
}

async function deleteUser(filter,data){
    let res= await userModel.findOneAndDelete(filter,data)

    return res
}

module.exports={addNewUser,readUser,addPlaylist,deleteUser,login}