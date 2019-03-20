const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./data/knexfile");
const db = knex(knexConfig.development);

const server = express();
const protection = helmet();
const parser = express.json();
server.use(protection, parser);

module.exports = server;
