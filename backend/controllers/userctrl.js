// controllers/userctrl.js
const UserCollection = require("../models/usermodel");
const bcrypt=require("bcrypt");
require('dotenv').config();
require("mongoose");
const user=require("../middleware/authMid")



//signup
exports.register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;
        if(!username || !email || !password || !confirmPassword)
        return res.status(401).json({msg: "all fields are required"})
        if (password === confirmPassword) {
            const userdata = new UserCollection({username, email, password, confirmPassword });
            const token=await  userdata.generateToken();
            res.cookie("token",token,{
                
                httpOnly:true
            });
            const userd= await userdata.save();
            
            res.status(201).json({msg: "signup successfully",token});
        }else{
            res.status(401).json({msg: "password do not match!"})
        }
        
       
    } catch (err) {
        res.json({err: "Registration Failed!"});
    }
};

//signin
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        
        const useremail=await UserCollection.findOne({email});
        if (!useremail) {
            return res.status(400).json({ msg: "User not found" });
        }
        const isMatch=await bcrypt.compare(password,useremail.password);
        const token=await  useremail.generateToken();
            res.cookie("token",token,{
                
                httpOnly:true
            });
        if(isMatch){
            res.status(200).json({msg: "logged in",user:{email: useremail.email,password: useremail.password},token,id: useremail._id,role: useremail.role});
        }else{
            res.status(400).json({msg: "password do not match!"})
        }
        
        

    }catch(err){
        res.status(500).json({err: "Signin Failed!"})
    }
}
//Addtocart
exports.addToCart=async(req,res)=>{
    console.log(req.body,"64");
    const isUpdate=await UserCollection.updateOne({_id : req.body.userId},{
        $addToSet: { cart: req.body.productId }
    })
    if(isUpdate){
        return res.json({code: 200, msg: "add to cart successfully"})
    }else{
        return res.json({code:500, msg:"error"})
    }
    
}
//getCart
exports.getCart=async(req,res)=>{
    const userId= req.body.userId
    const data=await UserCollection.findOne({_id: userId}).populate('cart')
    if(data){
        return res.json({code: 200, msg: "Get cart success", data: data})
    }else{
        return res.json({code:500, msg:"error"})
    }
}
// removeFromCart
exports.removeFromCart = async (req, res) => {
    try {
        const userId = req.body.userId;
        const productId = req.body.productId;

        const isRemoved = await UserCollection.updateOne(
            { _id: userId },
            { $pull: { cart: productId } }
        );

        if (isRemoved) {
            return res.json({ code: 200, msg: "Course removed from cart successfully" });
        } else {
            return res.json({ code: 500, msg: "Failed to remove course from cart" });
        }
    } catch (error) {
        console.error("Error removing course from cart:", error);
        return res.status(500).json({ code: 500, msg: "Internal server error" });
    }
};



exports.getUsers=async(req,res)=>{
    try{
      const userId= req.body.userId
      const user=await UserCollection.findOne({_id: userId})
      if(user){
          res.status(201).json({msg:"found successfully",user})
      }else{
          res.status(401).json({code: 500,msg:"server error"})
      }
    }catch(e){
      res.status(500).json({msg: e.msg});
    }
  }
 



//logout
exports.logout=async(req,res)=>{
    try{
        
        res.clearCookie("jwt");
        console.log("logout successfully");
        await req.user.save();
        res.render("in.ejs")
    }catch(e){
        res.status(500).send(e)
    }

}

exports.admin=async(req,res)=>{
    try{
        
        
    }catch(e){
        res.status(400).json(e)
    }
}