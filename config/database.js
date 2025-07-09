const mongoose = require("mongoose");

// connect to db
const connectDB = async () => {
    try{
        await mongoose.connect(
            "mongodb+srv://novotek:xGlz4KdlyIExUnKV@mern-blog-v1.p7sukvf.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=mern-blog-v1"
        );
        // await mongoose.connect('mongodb://localhost:27017/mern-blog');
        console.log("DB has been connected");
    }catch(error){
        console.log("DB connection failed", error.message);
    }
};

module.exports = connectDB;

//xGlz4KdlyIExUnKV