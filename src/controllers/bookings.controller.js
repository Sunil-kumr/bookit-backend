const Booking = require('../models/Booking');

exports.create = async (req, res) => {
   console.log('REQ BODY:', req.body);
  const {  date, time, userEmail, qty, fullName, discount } = req.body;

  // Validate required fields
  if (  !date || !time || !userEmail || !qty || !fullName) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // Prevent double booking: same experience, date, time, email
  const exists = await Booking.findOne({  date, time, userEmail });
  if (exists) {
    return res.status(409).json({ message: "Already booked this slot!" });
  }

  // Create booking (store fullName and discount if provided)
  const booking = await Booking.create({
   
    date,
    time,
    userEmail,
    qty,
    fullName,
    discount: discount || 0
  });

  res.status(201).json(booking);
};
