// This middleware will be used to check users logged in
const jwt = require("jsonwebtoken");

// We will obtain the req and res from the route
const auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(401).json({
            message: "No authentication token. Access denied!"
        });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.status(401).json({
            message: "Token verification failed. Access denied!"
        });

        req.user = verified.id
        
        next();

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "The server has encountered a situation it doesn't know how to handle"
        });
    }
};

module.exports = auth;