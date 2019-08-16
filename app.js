const express = require("express");

// allow us to use .env variables
require('dotenv').config()

// import mongoose 
const mongoose = require('mongoose'); 

// import routes
const userRoutes = require('./routes/user');

// app
const app = express();

// db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => console.log("DB Connected"));

// ROUTES MIDDLEWARE will all be registered here
//// api prefix for user routes
app.use("/api", userRoutes);

// utilize local port defined in .env or || utilize 8000 if something happens to .env
const port = process.env.PORT || 8000

// run app on default port set on .env with callback function to confirm it is running with embedded port variable
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});