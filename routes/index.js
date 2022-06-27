const router = require('express').Router();
const customerRoute = require('./customer');
const hallRoute = require('./hall');


router.use('/customer',customerRoute);
router.use('/hall',hallRoute);




module.exports=router;