const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const UserCollection = require("../models/usermodel");


exports.auth=async(req,res,next)=>{
    try{
        const token=req.headers.authorization;
        const decode=jwt.verify(token,process.env.SECRET_KEY);
        console.log(decode)
        const user=await UserCollection.findOne({_id:decode._id});
        console.log(user);

        req.user = decode;
         
        next();

    }catch(error){   
        res.status(401).send(error)
    }
    
    
}



exports.isAdmin=async(req,res,next)=>{
    try{
        const user=await UserCollection.findById(req.user._id)
        if(user.role !==1){
            return  res.status(401).json({
                success:false,
                msg: "unauthrized Access",
            })
            
        }else{
            next();
        }
    }catch(error){
        console.log(error)
        res.status(401).send({
            success:false,
            msg: "error in admin auth"
        })
    }
}

