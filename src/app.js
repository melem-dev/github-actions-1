const express = require("express");
require("dotenv/config");
const app = express();

console.log(process.env.NODE_ENV);

module.exports = { app };
