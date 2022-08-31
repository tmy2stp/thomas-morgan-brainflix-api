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
    //return response.status(200).send(allVideos);
    response.status(200).send(allVideos);
});

router.get("/:id"), (request, response) => {
    const videoMeta = "";
}

module.exports = router;