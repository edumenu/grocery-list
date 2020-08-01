const express = require('express');
const dotenv = require('dotenv');   // Used to create global variables for ports and DB url
const colors = require('colors');   // Colors for console
const morgan = require('morgan');   // HTTP request
const connectDB = require('./config/DB');   // DB connection
var cors = require('cors')  // Cross origin resources sharing

const app = express();  // Initializing and setting up express app

app.use(cors())

// Setting up express JSON for the middleware
app.use(express.json());

dotenv.config({ path: './config/config.env' });

connectDB();

const groceries = require('./routes/groceries');
const user = require('./routes/user');

// Express body parser middleware for parsing incoming requests
if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'));
}

app.use('/api/v1/groceries', groceries) 
app.use('/api/v1/user', user)

const PORT = process.env.PORT || 5000

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));