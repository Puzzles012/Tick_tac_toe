// src/api.js
const express = require("express");
const app = express();
const game = require("../logic/ttt");
const index = require("../../dist/index");
const page = await browser.newPage();
app.get("/ttt/:player", (req, res) => {  
    var player = game.playerTurn(req.params.player);
   
    res.send({game: player});
    res.status(200); 
});

app.get("/dist/index", (req, res) => {
	var whatever = await page.goto("/dist/index.html");
	res.send(whatever);
	res.status(200);
})

module.exports = app;