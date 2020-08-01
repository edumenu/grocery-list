const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc Register a user
// @route POST /api/v1/groceries/registration
// @access Public
exports.addUser = async (req, res, next) => {

    try {
        let { email, password, city, displayName } = req.body;

        if (!email || !password || !city) return res.status(400).json({ message: "Please enter all the fields." })

        if (password.length < 5) return res.status(400).json({ message: "Password is less than 5 characters long" })

        const existingUser = await User.findOne({ email: email })

        if (existingUser) return res.status(400).json({ message: "Account with this email already exits. Please create a new email" })

        if (!displayName) displayName = email;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            city,
            password: passwordHash,
            displayName
        });

        const savedUser = await newUser.save();

        return res.status(201).json({
            success: true,
            data: savedUser
        });

    } catch (err) {
        if (err.name == "ValidationError") {
            const messages = Object.values(err.errors).map(val => val.message)

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


// @desc Login a user
// @route POST /api/v1/groceries/registration
// @access Public
exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ message: "Please enter all the fields." });

        const user_login = await User.findOne({ email: email });

        if (!user_login) return res.status(400).json({ message: "This user does not exist." })

        const ismatch = await bcrypt.compare(password, user_login.password)

        if (!ismatch) return res.status(400).json({ message: "Your password is incorrect." })

        const token = jwt.sign({ id: user_login._id }, process.env.JWT_SECRET)

        return res.status(201).json({
            success: true,
            token,
            id: user_login._id,
            displayName: user_login.displayName,
            city: user_login.city,
        });

    } catch (err) {
        if (err.name == "ValidationError") {
            const messages = Object.values(err.errors).map(val => val.message)

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

// @desc Delete a user
// @route POST /api/v1/groceries/registration
// @access Public
exports.deleteUser = async (req, res, next) => {
    try {
        const delete_user = await User.findByIdAndDelete(req.user);

        return res.status(204).json({
            success: true,
            data: delete_user
        });

    } catch (err) {
        return res.status(500).json({
            success: true,
            data: "The server has encountered a situation it doesn't know how to handle"
        });
    }
}

// @desc Check valid token
// @route Post /api/v1/user/validToken
// @access Public
exports.validToken = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        
        if (!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
    
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id)

        if(!user) return res.json(false)

        return res.status(201).json(true)

    } catch (err) {
        return res.status(500).json({
            success: true,
            data: "The server has encountered a situation it doesn't know how to handle"
        });
    }
}


// @desc Get user data
// @route Get /api/v1/user/
// @access Public
exports.getUserData = async (req, res, next) => {
    try {
        const user_data = await User.findById(req.user);
        
        if (!user_data) return res.json(false);

        return res.status(200).json({
            success: true,
            displayName: user_data.displayName,
            id: user_data._id,
            city: user_data.city
        })

    } catch (err) {
        return res.status(500).json({
            success: true,
            data: "The server has encountered a situation it doesn't know how to handle"
        });
    }
}