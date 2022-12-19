const express = require("express");
const router = express.Router();

const playlistLogic = require('../BL/playlistLogic')


router.post("/addToPlaylist", async (req, res) => {
    console.log("addtoplaylist req", req.body)
    try {
        const result = await playlistLogic.addToPlaylist(req.body);
        console.log(result)
        res.status(200).send(result)
    } catch (error) {
        console.log("error", error);
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("error in catch in playlist route")
        }

    }
})

router.post("/createNewPlaylist", async (req, res) => {
    try {
        const result = await playlistLogic.createNewPlaylist(req.body);
        console.log("playlist req", req.body);
        res.status(200).send(result)
    } catch (error) {
        console.log("error", error);
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("error in catch in playlist route")
        }

    }
})

router.get("/", async (req, res) => {
    try {
        const result = await playlistLogic.read(req.body);
        console.log("playlist read", req.body.mongoId);
        res.status(200).send(result)
    } catch (error) {
        console.log(error || "error");
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("error in catch in playlist read")
        }

    }
})

router.post("/songs", async (req, res) => {
    try {
        const result = await playlistLogic.PlreadSongsFromPl(req.body);
        // console.log("songs from  pl",result);
        res.status(200).send(result)
    } catch (error) {
        console.log(error || "error");
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("error in catch in playlist read")
        }
    }
})

router.post("/del", async (req, res) => {
    console.log("req.body",req.body)
    try {
        console.log("enterd the try loop in pl route del");
        const result = await playlistLogic.delSongFromPl(req.body)
        // console.log("updated pl", result);
        res.status(200).send(result)
    } catch (error) {
        console.log(error || "error");
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("error in catch in playlist del song")
        }
    }
})

router.post("/delete", async (req, res) => {
    try {
        const result = await playlistLogic.deletePlaylist(req.body);
        console.log("playlist delete 3765", req.body);
        res.status(200).send(result)

    } catch (error) {
        console.log(error || "error");
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("error in catch in playlist delete")
        }
    }
})

router.post("/rename", async (req, res) => {
    try {
        const result = await playlistLogic.renamePlaylist(req.body)
        console.log(result);
        res.status(200).send(result)
    } catch (error) {
        console.log(error || "error");
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("error in catch in playlist rename in route")
        }
    }
})

router.post("/showpl", async (req, res) => {
    console.log("banana", req.body);
    try {
        const result = await playlistLogic.showUsersPlaylists(req.body.id)
        console.log("result", result);
        res.status(200).send(result)
    } catch (error) {
        console.log(error || "error");
        if (error.code && error.code < 1000) {
            res.status(error.code).send(error.message)
        }
        else {
            res.send("error in catch in showpl in route")
        }
    }
})

module.exports = router