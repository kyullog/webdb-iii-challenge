const express = require("express");
const helmet = require("helmet");
const cohortsRouter = require("./routers/cohortsRouter");
const studentsRouter = require("./routers/studentsRouter");

const server = express();
const protection = helmet();
const parser = express.json();
server.use(protection, parser);

server.use(`/api/cohorts`, cohortsRouter);
server.use("/api/students", studentsRouter);

module.exports = server;
