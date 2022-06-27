const mongoose = require('mongoose');

const hallSchema = new mongoose.Schema({
    roomName:{
        type:Number,
        require:true,
        unique:true,
    },
    numberOfSeatsAvailable:Number,
    amenitiesInRoom:[String],
    pricePerHour:Number,
});

const Hall = new mongoose.model("halls",hallSchema);

module.exports = Hall;