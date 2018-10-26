// src/api.js
const express = require("express");
const app = express();
const index = require("../client/index");
const game = require("../logic/ttt");
app.get("/ttt/:player", (req, res) => {  
    var player = game.playerTurn(req.params.player);
   
    res.send({game: player});
    res.status(200);
});
app.get(":displayBoard" ,(req, res) => {
    var component = index.component(req.param.displayBoard);
    res.send({component});
    res.status(200);
});

module.exports = app;