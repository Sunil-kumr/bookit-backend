const Experience = require('../models/Experience');

exports.getAll = async (req, res) => {
  const experiences = await Experience.find();
  res.json(experiences);
};

exports.getOne = async (req, res) => {
  const experience = await Experience.findById(req.params.id);
  if (!experience) return res.status(404).json({ message: "Not found" });
  res.json(experience);
};
