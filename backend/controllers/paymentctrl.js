const Course = require("../models/coursemodel");

const Payment=require("../models/payment");
const UserCollection=require("../models/usermodel");
const stripe = require('stripe')('sk_test_51P694wAwbqKUUi7pR45Ha7WR5RlCheuxdde9vPrhhdmk2uHji32KNndtiF6krznYnfuEmQDM4ZKQCz2NQ9PGjnl300lksvpqBd');

module.exports.orders = async (req, res) => {
    try {
        const { amount, currency, productName ,userId} = req.body;
    
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            {              price_data: {
                currency,
                product_data: {
                  name: productName,
                },
                unit_amount: amount * 100, // Convert amount to cents
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: 'http://localhost:3000/success',
          cancel_url: 'http://localhost:3000/cancel',
          

        });
        const paymentData = {
            userId,
            amount,
            currency,
            productName,
            sessionId: session.id,
          };
          
          const payment = new Payment(paymentData);
          await payment.save();
    
        res.json({ sessionId: session.id });
      } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

// controllers/paymentctrl.js



module.exports.verify = async (req, res) => {
  try {
    const userId = req.body.userId;

    // Find all payment data for the user and sort them by createdAt date in descending order
    const paymentData = await Payment.find({ userId }).sort({ createdAt: -1 }).limit(1);

    if (!paymentData || paymentData.length === 0) {
      return res.status(404).json({ message: "Payment data not found" });
    }

    // Return the latest payment data
    res.status(200).json(paymentData[0]);
  } catch (error) {
    console.error('Error fetching payment data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports.getOrdered = async (req, res) => {
  try {
    

    // Find all payment data for the user and sort them by createdAt date in descending order
    const paymentData = await Payment.find();

    if (!paymentData || paymentData.length === 0) {
      return res.status(404).json({ message: "Payment data not found" });
    }

    // Return the latest payment data
    res.status(200).json(paymentData);
  } catch (error) {
    console.error('Error fetching payment data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports.purCourses=async(req,res)=>{
  try {
      
      const userId = req.body.userId; // Assuming you pass userId in the request body
      const paymentData = await Payment.findOne({ userId });
  
      if (!paymentData) {
        return res.status(404).json({ message: "Payment data not found" });
      }
      const data = await UserCollection.findById(userId).populate('cart');

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    
    res.status(200).json(data.cart);
    } catch (error) {
      console.error('Error fetching payment data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}
