var express = require('express');
var app = express();
import {newGame} from './game'

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/startGame', function (req, res) {
  const gameState = newGame()
  res.send(gameState);
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
