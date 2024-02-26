const getResult=require('../controllers/conditionController');
const express=require('express');
const router=express.Router();

router.get('/',getResult);

module.exports=router;