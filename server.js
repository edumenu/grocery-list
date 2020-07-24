const express = require('express');
const dotenv = require('dotenv');   // Used to create global variables for ports and DB url
const colors = require('colors');   // Colors for console
const morgan = require('morgan');   // HTTP request
const connectDB = require('./config/DB');   // DB connection

const app = express();  // Initializing and setting up express app

// Then use it before your routes are set up:
// Setting up express JSON for the middleware
app.use(express.json());

dotenv.config({ path: './config/config.env' });   // Using dotenv to access the config file

connectDB();   // Connecting to the mongoDB database

const groceries = require('./routes/groceries');   // Initializing the grocery routing file
const user = require('./routes/user');   // Initializing the grocery routing file

// Express body parser middleware for parsing incoming requests
if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'));
}

app.use('/api/v1/groceries', groceries)   // Mounting the grocery router to this endpoint in the middleware
app.use('/api/v1', user)   // Mounting the user router to this endpoint in the middleware

const PORT = 5000  //Accessing the global variable to get port

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));