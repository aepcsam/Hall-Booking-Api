const router = require('express').Router();
const Customer = require('../models/customer');
const Hall = require('../models/hall');

router.get('/',(req,res)=>{
    res.json('Customer Router is Working...');
});

router.post('/add',async(req,res)=>{
    try {
        const user = await Customer({
            roomId:req.body.roomId,
            customerName:req.body.customerName,
            isbookedStatus:req.body.isbookedStatus,
            date:req.body.date,
            starttime:req.body.starttime,
            endTime:req.body.endTime,
        });
        const data = await user.save();
        res.json(data);

    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get('/view',async(req,res)=>{
    try {
        const user = await Customer.find({});
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get('/find',async(req,res)=>{
    try {
        const user = await Customer.find().populate("roomId");
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get('/find/:id',async(req,res)=>{
    try {
        const user = await Customer.findOne({_id:req.params.id}).populate("roomId","roomName -_id");
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});




router.put('/update/:id',async(req,res)=>{
    try {
        const user = await Customer.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    } catch (error) {
        res.json({msg:error.message}); 
    }
});

router.delete('/delete/:id',async(req,res)=>{
    try {
        const user = await Customer.findByIdAndDelete({_id:req.params.id},{new:true});
        if(user){
            res.json({msg:"Customer Data is Deleted."});
        }
        else{
            res.json({msg:"Customer Data Not Found."})
        }
    } catch (error) {
        res.json({msg:error.message}); 
    }
})



module.exports=router;