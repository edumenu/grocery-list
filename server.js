const express = require('express');
const dotenv = require('dotenv');   // Used to create global variables for ports and DB url
const colors = require('colors');   // Colors for console
const morgan = require('morgan');   // HTTP request

dotenv.config({ path: './config/config.env' });   // Using dotenv to access the config file

const app = express();  // Initializing express app

app.get('/', (req,res) => res.send('Hello'))

const PORT = process.env.PORT || 5000  //Accessing the global variable to get port

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));