const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/ELearning")
.then(()=>{
    console.log("connected")
})
.catch((e)=>{
    console.log("no conection")
})
