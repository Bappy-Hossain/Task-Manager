//Basic Lib Import
const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const bodyParser = require("body-parser");

//Security Middleware Lib Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");

//Database Lib Import
const mongoose = require("mongoose");

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

//Body Parser Implement
app.use(bodyParser.json());

//Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

//Mongo DB Database Connection
let URI =
  "mongodb+srv://bappyDemo:2yQPDSTZAKkAxmuO@cluster0.vzkbd.mongodb.net/TaskManager";
let OPTION = { autoIndex: true };
mongoose.connect(URI, OPTION, (error) => {
  console.log("Connection Successs");
  console.log(error);
});

//Routing Implement
app.use("/api/v1", router);

//Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "Not Found!" });
});

module.exports = app;
