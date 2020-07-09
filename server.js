const express = require('express');
const dotenv = require('dotenv');   // Used to create global variables for ports and DB url
const colors = require('colors');   // Colors for console
const morgan = require('morgan');   // HTTP request
const connectDB = require('./config/DB');   // DB connection

dotenv.config({ path: './config/config.env' });   // Using dotenv to access the config file

connectDB();   // Connecting to the mongoDB database

const groceries = require('./routes/groceries');   // Initializing the routing file

const app = express();  // Initializing express app

app.use(express.json());  // Express body parser middleware for parsing incoming requests

if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}

app.use('/api/v1/groceries', groceries)   // Mounting the router to this endpoint  

const PORT = process.env.PORT || 5000  //Accessing the global variable to get port

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));