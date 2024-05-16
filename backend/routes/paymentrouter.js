const express=require("express");
const router=express.Router();
const paymentctrl=require("../controllers/paymentctrl");

router.post('/orders',paymentctrl.orders);
router.post('/verify',paymentctrl.verify);
router.post('/purchased-courses',paymentctrl.purCourses);
router.get("/ordered",paymentctrl.getOrdered)




module.exports=router;