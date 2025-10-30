const Promo = require('../models/Promo');

exports.validate = async (req, res) => {
  const { code } = req.body;
  const found = await Promo.findOne({ code });
  if (!found) return res.status(404).json({ valid: false });
  res.json({ valid: true, discount: found.discount });
};
