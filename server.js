const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("Ola mundo")
})

module.express = server;