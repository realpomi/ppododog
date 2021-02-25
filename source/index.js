var express = require("express");
var http = require("http");
var app = express();

const port = process.env.PORT ?? 3000;

app.use("/", (req, res, next) => {
    res.send("hi");
})

app.listen(port, () => {
    console.log("listen.. " + port);
})