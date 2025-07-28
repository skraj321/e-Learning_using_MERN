const express=require("express");
const app=express();
// const bcrypt=require("bcryptjs");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const UserCollection=require("./models/usermodel");
const cors=require("cors");
const path=require("path");
require("./db/conn");
require("dotenv").config();
const authRouter=require("./routes/userrouter");
const courseRouter=require("./routes/courserouter");
const paymentRouter=require("./routes/paymentrouter");
const auth=require("./middleware/authMid")
app.use(cors({
    origin: ["http://localhost:3000", "https://e-learning-using-mern-6tzb.vercel.app"],
    credentials: true
}))
const PORT = process.env.PORT || 3800;
app.set("view engine","ejs");
app.use(express.json());
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send({
        activeStatus : true,
        error: false ,
       })
})
app.use("/user",authRouter);
app.use("/course",courseRouter);
app.use("/payment",paymentRouter);

app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(PORT,()=>{
    console.log(`connection at port no: ${PORT}`)
});