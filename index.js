const express = require("express");
const app = express();
const PORT = 8000; // this needs to go to env
const videoRoute = require("./routes/videos");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/videos", videoRoute);

app.get("/", function (req, res ) {
    console.log("API loaded");
    res.send("API Loaded!");
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})
