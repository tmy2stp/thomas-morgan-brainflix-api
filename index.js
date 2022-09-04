const express = require("express");
const app = express();
const videoRoute = require("./routes/videos");
const cors = require("cors");

// All things dotenv
const dotenv = require("dotenv");
dotenv.config();
const PORT = (process.env.API_PORT == null) ? 8001 : process.env.API_PORT;

app.use(cors());
app.use(express.json());

app.use("/videos", videoRoute);
app.use(express.static('public'));
app.use('/images', express.static('images'));

app.get("/", function (req, res ) {
    console.log("API loaded");
    res.send("API Loaded!");
});
app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})
