const mongoose = require("mongoose");

const URL = process.env.DB_URL

// connect to db
const connectDB = async () => {
    try{
        await mongoose.connect(URL);
        // await mongoose.connect('mongodb://localhost:27017/mern-blog');
        console.log("DB has been connected");
    }catch(error){
        console.log("DB connection failed", error.message);
    }
};

module.exports = connectDB;

