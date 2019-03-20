const express = require("express");
const helmet = require("helmet");

const server = express();
const helmet = helmet();
const parser = express.json();
server.use(helmet, parser);

module.exports = server;
