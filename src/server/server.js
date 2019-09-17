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
//routing
const twitterApi =  require('./routes/tweets.js');
twitterApi(app, io);

server.listen(port, () => {
    console.log('server is up');
});