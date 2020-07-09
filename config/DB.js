const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        // Connecting to MongoDB using credentials from config.env
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        console.log(`Mongo DB connected: ${conn.connection.host}`.cyan.underline.bold)

    } catch (err) {
        console.log(`Error: ${err.message}`.red)
        process.exit(1);
    }

}

module.exports = connectDB;