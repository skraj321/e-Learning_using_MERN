const mongoose = require('mongoose');

// Define the schema for the Payment model
const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserCollection', // Reference to the User model assuming you have one
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
  },
  // You can add more fields as needed
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Payment model based on the schema
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
