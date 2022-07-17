const playlistModel= require("../models/playlist")

async function create(data){
  let res= await playlistModel.create(data)
  return res
}

async function read (filter){
    let res =filter
    ?await playlistModel.find({filter})
    :await playlistModel.find({});

    return res
}

async function update(filter,data){
    let res= await playlistModel.findOneAndUpdate(filter,data)
    return res
}

async function deleteIt(filter){
    let res=await playlistModel.findByIdAndDelete(filter)
}


module.exports={deleteIt,update,read,create}

