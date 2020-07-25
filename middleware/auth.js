// This middleware will be used to check users logged in
const jwt = require("jsonwebtoken");

// We will obtain the req and res from the route
const auth = (req, res, next) => {
    try {
        // Getting the x-auth-token value from the header from the front-end
        const token = req.header("x-auth-token");
        // Check for empty token and return 401
        if (!token) return res.status(401).json({
            message: "No authentication token. Access denied!"
        });

        // If the token exist, we verify it with the token secrete
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        // Checking for token verification
        if (!verified) return res.status(401).json({
            message: "Token verification failed. Access denied!"
        });

        // The user id with the req
        req.user = verified.id
        // Calling the next to continue with the function execution
        next();

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "The server has encountered a situation it doesn't know how to handle"
        });
    }
};

module.exports = auth;