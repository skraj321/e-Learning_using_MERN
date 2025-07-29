const Course = require("../models/coursemodel");
const users=require("../models/usermodel");
// const bcrypt=require("bcrypt");
require('dotenv').config();
// const auth=require("../middleware/auth");

exports.addCourse=async(req,res)=>{
    try{
    console.log(req.body,"8");
   
    const newCourse=new Course(req.body);
    const isSaved=await newCourse.save();
    if(isSaved){
        res.status(201).json({msg: "saved"})
    }
    }catch(err){
        res.status(500).json(err);
    }
}
exports.getCourse=async(req,res)=>{
    try{
        const data=await Course.find({})
        if(data.length>0){
            res.status(201).json({msg:"found successfully",data})
            console.log("Connected to db")
        }else{
            res.status(401).json({code: 500,msg:"server error"})
        }

    }catch(err){
        res.status(500).json(err)
    }
}
exports.singleCourse= async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.adminCourse= async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Update a course
  exports.updateCourse= async (req, res) => {
    try {
      const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //Delete a course
  exports.deleteCourse=async (req, res) => {
    try {
      const course = await Course.findByIdAndDelete(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json({ message: 'Course deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  //view users

  exports.viewUsers=async(req,res)=>{
    try{
      const user=await users.find({})
      if(user.length>0){
          res.status(201).json({msg:"found successfully",user})
      }else{
          res.status(401).json({code: 500,msg:"server error"})
      }
    }catch(e){
      res.status(500).json({msg: e.msg});
    }
  }

  exports.deleteUser=async (req, res) => {
    try {
      const userId = req.params.userId;
      // Check if the user exists
      const user = await users.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // If user exists, delete it
      await users.findByIdAndDelete(userId);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };