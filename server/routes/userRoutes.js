const userController=require('../controllers/userController');
const express=require('express');
const router=express.Router();

router.post('/create',userController.createUser);
router.get('/getall',userController.getAllUsers);
router.get('/getone/:id',userController.getOneUser);
router.put('/update/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteUser);

module.exports=router;