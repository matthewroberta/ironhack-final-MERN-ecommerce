const express = require("express");
const app = express();

// allow us to use .env variables
require('dotenv').config()

// default index (/) function
app.get("/", (req, res) => {
  res.send("hello from node for hew ecommerce Ironhack final project with nodemon working");
})

// utilize local port defined in .env or || utilize 8000 if something happens to .env
const port = process.env.PORT || 8000

// run app on default port set on .env with callback function to confirm it is running with embedded port variable
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});