var express = require("express");
var http = require("http");
var app = express();

const port = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
    res.send("hi 해해 고고?");
})

app.listen(port, () => {
    console.log("listen.. " + port);
})