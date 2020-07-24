const Grocery = require('../models/Grocery');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// @desc Add a user
// @route POST /api/v1/groceries
// @access Public
exports.addUser = async (req, res, next) => {

    try {
        // Obtaining email, password and displayName from the body of the req
        let { email, password, displayName } = req.body;

        // Check to see if any of these fields are empty
        // Return 400 status for not providing all the fields
        if(!email || !password) return res.status(400).json({message: "Please enter all the fields."})

        // Password length
        if(password.length < 5) return res.status(400).json({message: "Password is less than 5 characters long"})

        // Check for an existing user
        const existingUser = await User.findOne({email: email})
        if(existingUser) return res.status(400).json({message: "Account with this email already exits. Please create a new email"})

        // Set default display name if none is set
        if(!displayName) displayName = email;

        // Creating a salt for the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // Creating a new User after validation checks   
        const newUser = new User({
            email,
            password: passwordHash,
            displayName
        });

        // Save User in the database
        const savedUser = await newUser.save();

        // Sending a response of 201(created status)
        return res.status(201).json({
            success: true,
            data: savedUser
        });

    } catch (err) {
        console.log(err)
        // We are checking for error with a name of Validation to stores all it's messages
        if (err.name == "ValidationError") {
            const messages = Object.values(err.errors).map(val => val.message)  // Adding all the error messages into an array
            // Sending a response of 400(client error)
            // We are sending back error messages so it can be used in the front end
            return res.status(400).json({
                success: false,
                error: messages
            });

        } else {
            return res.status(500).json({
                success: false,
                error: "The server has encountered a situation it doesn't know how to handle"
            });
        }
    }

}

// @desc Get all grocery lists
// @route GET /api/v1/groceries
// @access Public
exports.getGroceries = async (req, res, next) => {
    try {
        var grocery = ''
        if (req.query.createdAt) {
            // Setting a query to find grocery item by date
            var query = { createdAt: req.query.createdAt.replace(/T/, ' ').substr(0, 10) };
            grocery = await Grocery.find(query);
        } else {
            // Finding all grocery items
            grocery = await Grocery.find();
        }

        // Return a response status of 200 (ok status) and the data should be sent to the client 
        return res.status(200).json({
            success: true,
            count: grocery.length,
            data: grocery
        });

    } catch (err) {
        // Sending a error message with status of 500 (Internal server error)
        return res.status(500).json({
            success: false,
            error: "The server has encountered a situation it doesn't know how to handle"
        })
    }
}

// @desc Add a grocery list
// @route POST /api/v1/groceries
// @access Public
exports.addGroceries = async (req, res, next) => {

    try {
        // Setting a defaut amount value
        if (!req.amount) req.amount == 0
        // Obtaining text, amount and createdAt from the body of the req
        const { item, amount, createdAt } = req.body;
        // Saving it into a variable    
        const grocery = await Grocery.create(req.body);
        // Sending a response of 201(created status)
        return res.status(201).json({
            success: true,
            data: grocery
        });

    } catch (err) {
        // We are checking for error with a name of Validation to stores all it's messages
        if (err.name == "ValidationError") {
            const messages = Object.values(err.errors).map(val => val.message)  // Adding all the error messages into an array
            // Sending a response of 400(client error)
            // We are sending back error messages so it can be used in the front end
            return res.status(400).json({
                success: false,
                error: messages
            });

        } else {
            return res.status(500).json({
                success: false,
                error: "The server has encountered a situation it doesn't know how to handle"
            });
        }
    }

}

// @desc Delete a grocery list
// @route DELETE /api/v1/groceries
// @access Public
exports.deleteGroceries = async (req, res, next) => {
    try {
        const grocery = await Grocery.findById(req.params.id);
        // If the id of the grocery list is not found, send a 404 (Not found) status
        if (!grocery) {
            return res.status(404).json({
                success: false,
                error: 'Grocery item not found'
            });
        }
        // Removing grocery list with the id found
        await grocery.remove();
        // Send a success message
        return res.status(200).json({
            success: true,
            data: "Grocery item was deleted successfully!"
        });

    } catch (err) {
        // Send an error message with status of 500 when something goes wrong
        return res.status(500).json({
            success: true,
            data: "The server has encountered a situation it doesn't know how to handle"
        });

    }
}