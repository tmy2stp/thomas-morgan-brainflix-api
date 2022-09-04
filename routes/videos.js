const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");
const videoDataPath = './data/videos.json';

function getAllVideos() {
    let rawVideoData = fs.readFileSync(videoDataPath);
    let videoData = JSON.parse(rawVideoData);
    return videoData;
}

router.route("/")
.get((request, response) => {
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
})
.post((request, response) => {
    let title = request.body.title;
    let channel = request.body.channel;
    let description = request.body.description;
    let timestamp = request.body.timestamp;
    let id = crypto.randomUUID();

    // Grab the current set of videos
    let allVideos = getAllVideos();
    let newVideo = {
        title:title,
        channel:channel,
        image:"http://localhost:8000/images/homer.jpg",
        description:description,
        views:0,
        likes:0,
        duration:"0:15",
        video:"https://project-2-api.herokuapp.com/stream",
        timestamp:timestamp,
        comments:[],
        id:id
    };
    // Add the new video
    allVideos.push(newVideo);

    // Rewrite json file with the new video
    fs.writeFile(videoDataPath, JSON.stringify(allVideos), (err) => {
        if (err) {
            console.log(err);
        }
    });
    response.json(allVideos);
    console.dir(allVideos);
});

router.route("/:id").get((request, response) => {
    let id = request.params.id;
    const allVideos = getAllVideos();
    let toSend = allVideos.filter(e => e.id === id);
    if (toSend !== null) {
        response.status(200).send(toSend[0]);
    }
});

module.exports = router;