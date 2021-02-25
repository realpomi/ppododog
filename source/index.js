var express = require("express");
var http = require("http");
var app = express();

app.use("/", (req, res, next) => {
    res.send("hi");
})

app.listen(3000, () => {
    console.log("listen..");
})