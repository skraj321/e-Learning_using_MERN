const express=require("express");
const router=express.Router();
// const multer = require('multer');
const Course=require("../models/coursemodel");
const Coursectrl=require("../controllers/coursectrl");
const {auth,isAdmin}=require("../middleware/authMid");
const users=require("../models/usermodel");



router.post("/admin/addCourse",Coursectrl.addCourse);
router.get("/admin/users",Coursectrl.viewUsers);
router.delete('/admin/users/:userId',Coursectrl.deleteUser);
router.get("/getCourse",Coursectrl.getCourse);
router.get("/getCourse/:id",Coursectrl.singleCourse);
router.get("/admin/getCourse/:id",Coursectrl.adminCourse);
router.patch("/admin/updateCourse/:id",Coursectrl.updateCourse);
router.delete("/admin/deleteCourse/:id",Coursectrl.deleteCourse);



module.exports=router;