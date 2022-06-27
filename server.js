const express = require('express');
const dontenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const ApiRouter = require('./routes/index');
// MongoDb Connected
const connectDB = require('./config/db');
connectDB();


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',ApiRouter);


app.get('/',(req,res)=>{
    res.json("Api is Working..");
});

app.listen(PORT,()=>{
    console.log(`Server is Running @ ${PORT}`);
})