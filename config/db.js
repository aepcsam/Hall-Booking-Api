const mongoose = require('mongoose');

const url = process.env.MONGODB_URL;

const connectDB = async()=>{
    try {
        const con = await new mongoose.connect(url);
        console.log(`MongoDb Connected: ${con.connection.host} `);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;