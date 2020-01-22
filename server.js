const express = require('express');

const SchemeRouter = require('./schemes/scheme-router');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.get("/", (req, res, next) => {
    res.send("<h1>Hello from the server side.</h1>")
})

module.exports = server;