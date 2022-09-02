const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");

function getAllVideos() {
    let rawVideoData = fs.readFileSync("./data/videos.json");
    let videoData = JSON.parse(rawVideoData);
    return videoData;
}

function getVideo(id) {

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
    console.log(toSend);
    response.status(200).send(toSend);
});

router.get("/:id"), (request, response) => {
    const videoMeta = "";
}

module.exports = router;