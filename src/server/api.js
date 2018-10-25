// src/api.js
const express = require("express");
const app = express();
const game = require("../logic/ttt");
const index = require("../dist/index");

app.get("/ttt/:player", (req, res) => {  
   
    res.send(index);
    res.status(200); 
});





module.exports = app;