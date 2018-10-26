// src/api.js
const express = require("express");
const path = require('path');
const router = express.Router();
var start = path.normalize("./dist");
var app = express();
var fs = require('fs');
const game = require("../logic/ttt");
//app.use('/', express.static(start));

/**/
app.get("/ttt/:player", (req, res) => {  
    var player = game.playerTurn(req.params.player);
   
    res.send({game: player});
    res.status(200);
});

app.get("/" ,(req, res) => {
    res.status(200).sendfile("index.html", {root: start});
});
  /*
router.get("/", (req, res) => {
    res.status(405).send({ error: "GET method not allowed, try OPTIONS." });
});


router.options("/", (req, res) => {
    const options = {
      options: { get: ["/logic/ttt", "/logic/ttt/{board}"] }
    };
    res.status(200).send(options);
  });

router.get("", (req, res) => {
    res.status(200).sendfile("index.html", {root: start});
});*/

app.get("/:file", (req, res) => {
    var file = req.params.file;
     //send file if it exists with status code 200
    if(fs.existsSync(start+ "/" +file)){
        res.status(200).sendFile(file, {root: start});
    }
    //if not, only send status 404
    else{
        res.status(404).end();
    }
});

module.exports = app;

