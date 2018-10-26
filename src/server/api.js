// src/api.js
const express = require("express");
const app = express();
const game = require("../logic/ttt");

app.get("/ttt/:player", (req, res) => {  
    var player = game.playerTurn(req.params.player);
   
    res.send({game: player});
    res.status(200); 
});

app.get("/dist/index", (req, res) => {
    var svar = game(req.params.player);
	res.send({svar});
	res.status(200);
})

module.exports = app;