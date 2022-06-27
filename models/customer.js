const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    roomId:{
        type:mongoose.Types.ObjectId,
        ref:"halls"
    },
    customerName:String,
    isbookedStatus:{
        type:Boolean,
        default:false
    },
    date:Date,
    starttime:String,
    endTime:String,
});

const Customer = new mongoose.model("customers",customerSchema);

module.exports = Customer;