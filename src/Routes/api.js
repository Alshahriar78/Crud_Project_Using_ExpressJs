const express=require('express');

const router=express.Router();

const adminController =require('../Controllers/adminController');
const subAdminController =require('../Controllers/subAdminController');
const postController =require('../Controllers/postController');
const userController =require('../Controllers/userController');

router.get("/one",adminController.read);
router.get("/two",adminController.create);
router.get("/three",adminController.delete);
router.get("/four",adminController.update);

router.get("/five",postController.read);
router.get("/six",postController.create);
router.get("/seven",postController.delete);
router.get("/eight",postController.update);

router.get("/nine",subAdminController.read);
router.get("/ten",subAdminController.create);
router.get("/eleven",subAdminController.delete);
router.get("/twelve",subAdminController.update);

router.get("/thirteen",userController.read);
router.get("/fourteen",userController.create);
router.get("/fifteen",userController.delete);
router.get("/sixteen",userController.update);

module.exports=router;