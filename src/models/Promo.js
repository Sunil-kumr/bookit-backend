const mongoose = require('mongoose');
const promoSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true }, // e.g. SAVE10
  discount: { type: Number, required: true } // e.g. 10 (for 10%)
});
module.exports = mongoose.model('Promo', promoSchema);
