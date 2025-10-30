const mongoose = require('mongoose');
const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  dates: [String], // example: ["2025-11-01", "2025-11-02"]
  times: [{ time: String, soldOut: Boolean }]
});
module.exports = mongoose.model('Experience', experienceSchema);
