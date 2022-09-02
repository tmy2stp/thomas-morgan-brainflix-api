const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");

function getAllVideos() {
    let rawVideoData = fs.readFileSync("./data/videos.json");
    let videoData = JSON.parse(rawVideoData);
    return videoData;
}

router.route("/").get((request, response) => {
    const allVideos = getAllVideos();
    let toSend = allVideos.map((e) => {
        return {
            id:e.id,
            title:e.title,
            channel:e.channel,
            image:e.image
        }
    });
    response.status(200).send(toSend);
});

router.route("/:id").get((request, response) => {
    let id = request.params.id;
    const allVideos = getAllVideos();
    let toSend = allVideos.filter(e => e.id === id);
    response.status(200).send(toSend);
});

module.exports = router;