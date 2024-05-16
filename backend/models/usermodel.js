const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const Course=require("./coursemodel");

const { Schema } = mongoose;

const formDataSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    role:{
        type: Number,
        default: 0,
    },
    cart:[{
         type: Schema.Types.ObjectId, ref: 'Course'
    }],
    tokens:[{
        token:{
        type:String,
        required:true
        }
    }]
    
})

formDataSchema.methods.generateToken=async function(){
    try{
        console.log(this._id)
        const token=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        
        return token;

    }catch(e){
        console.log(e)
    }

}





formDataSchema.pre("save",async function(next){
    if(this.isModified("password")){
        
        console.log(`${this.password}`)
        this.password=await bcrypt.hash(this.password,10);
        this.confirmPassword=await bcrypt.hash(this.confirmPassword,10);
        
    
    }
    next();
})


const UserCollection=new mongoose.model("UserCollection",formDataSchema);
module.exports=UserCollection;