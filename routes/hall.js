const router = require('express').Router();
const Hall = require('../models/hall');
const Customer = require('../models/hall');

router.get('/',(req,res)=>{
    res.json('Hall Router is Working...');
});

router.post('/add',async(req,res)=>{
    try {
        const user = await Hall({
            roomName:req.body.roomName,
            numberOfSeatsAvailable:req.body.numberOfSeatsAvailable,
            amenitiesInRoom:req.body.amenitiesInRoom,
            pricePerHour:req.body.pricePerHour,  
        });
        const data = await user.save();
        res.json(data);    
    } catch (error) {
        res.json({msg:error.message});
    }
});


router.get('/view',async(req,res)=>{
    try {
        const user = await Hall.find({});
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});


router.delete('/delete/:id',async(req,res)=>{
    try {
        const user = await Hall.findByIdAndDelete({_id:req.params.id});
        if(user){
            res.json({msg:"Hall Data is Deleted."});
        }
        else{
            res.json({msg:"Data not Found."});
        }
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.put('/update/:id',async(req,res)=>{
    try {
        const user = await Hall.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
})



module.exports=router;