const http = require('http');
const path = require('path');
const express = require('express');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();
//create server with socket
const server = http.createServer(app);
const io = socketIo(server);
//add middleware
app.use(bodyParser.json());
//enable CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
//routing
const twitterApi =  require('./routes/tweets.js');
twitterApi(app, io);

server.listen(port, () => {
    console.log('server is up');
});