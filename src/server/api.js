// src/api.js
const express = require("express");
const app = express();
const game = require("../logic/ttt");
const index = require("../../dist/index.html");

app.get("/ttt/index", (req, res) => {  
    //var player = game.playerTurn(req.params.player);
   
    res.send(index);
    res.status(200); 
});





module.exports = app;