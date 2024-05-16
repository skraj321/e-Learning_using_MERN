const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  url: { type: String, required:true, },
  title: { type: String, required: true },
  briefDes: {type: String,max: 20},
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  price: { type: Number, required: true },
  resource: { type: String, required: true },
  rating: {
    type: Number,
    required:true
    
  },
  duration: {
    type: Number,
    required:true
    
  },
  videoUrl: {
    type: String,
    required:true

    
  }

});

module.exports = mongoose.model('Course', courseSchema);
