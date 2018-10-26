// src/api.js
const express = require("express");
const app = express();
const path = require('path');
var start = path.normalize("./dist");

var fs = require('fs');
const game = require("../logic/ttt");

app.use('/', express.static(start));

app.get("/ttt/:player", (req, res) => {  
    var player = game.playerTurn(req.params.player);
   
    res.send({game: player});
    res.status(200);
});

app.get("/" ,(req, res) => {
    res.status(200).sendfile("index.html", {root: start});
});


module.exports = app;

