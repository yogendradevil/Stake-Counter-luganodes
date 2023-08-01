require('dotenv').config();
const express = require("express");
const app = express();
const connectToDatabase = require("./config/dbConnection");
const router = require('./routes/routeing');

// connect to database
connectToDatabase();

// routeing
app.use("/", router);
app.use("/test", router);

// hosting
const port = process.env.PORT || 8000;
const hostname = "127.0.0.1";
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});