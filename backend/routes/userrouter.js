const express=require("express");
const router=express.Router();
const UserCollection=require("../models/usermodel");
const userctrl=require("../controllers/userctrl");
const {auth,isAdmin}=require("../middleware/authMid");



router.post("/register",userctrl.register);
router.post("/login",userctrl.login);
router.post("/profile",userctrl.getUsers);
router.post("/add-to-cart",userctrl.addToCart);
router.post("/remove-from-cart", userctrl.removeFromCart);

router.post("/logout",userctrl.logout);
router.post("/user-cart",userctrl.getCart);


router.get("/user-auth",auth,(req,res)=>{
    res.status(200).json({ok: true});
});



router.get("/admin",userctrl.admin);

    




module.exports=router;