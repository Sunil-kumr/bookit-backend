const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({

  date: { type: String, required: true },
  time: { type: String, required: true },
  userEmail: { type: String, required: true },
  qty: { type: Number, required: true },
  fullName: String,            // <--- add this line
  discount: { type: Number, default: 0 }  // <--- add this line
});

module.exports = mongoose.model('Booking', bookingSchema);
